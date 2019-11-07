import * as React from 'react'
import { default as test } from 'ava'
import reducers from './reducers'
import {answerQuestion} from './actions'
import {GameState, Question} from '../types'

/**
 * Generator to give us predictable questions to populate state
 */
function* mockQuestion(): Generator<Question> {
	let i = 0
	let answer = true

	while (true) {
		yield(
			{
				id: i,
				category: 'Test Category',
				type: 'boolean',
				difficulty: 'hard',
				question: `Question ${i}`,
				correctAnswer: answer
			}
		)

		answer = !answer
		i += 1
	}
}

test('should update game state for ANSWER_QUESTION dispatch', t => {
	const getQuestion = mockQuestion()
	const initialState: GameState = {
		isGameStarted: false,
		isGameOver: false,
		currentQuestionId: 0,
		questions: [getQuestion.next().value],
		correctAnswers: 0,
		incorrectAnswers: 0
	}
	
	const state = initialState

	const actual = reducers(
		state,
		answerQuestion({ answer: true, id: 0 })
	)

	const expected = state.questions[0]

	expected.answer = true

	t.deepEqual(actual, {
		isGameStarted: false,
		isGameOver: true,
		currentQuestionId: 1,
		questions: [
			expected
		],
		correctAnswers: 1,
		incorrectAnswers: 0
	})
})

test('game should end when all questions have been answered', t => {
	const getQuestion = mockQuestion()
	const initialState: GameState = {
		isGameStarted: false,
		isGameOver: false,
		currentQuestionId: 0,
		questions: [],
		correctAnswers: 0,
		incorrectAnswers: 0
	}

	let state = initialState
	let actual = state
	// populate with questions
	state.questions = Array(2).fill(2).map(() => getQuestion.next().value)
	
	actual = reducers(
		actual,
		answerQuestion({ answer: true, id: 0 })
	)

	actual = reducers(
		actual,
		answerQuestion({ answer: true, id: 1 })
	)

	t.deepEqual(actual.questions, [
		{
			...state.questions[0],
			answer: true
		},
		{
			...state.questions[1],
			answer: true
		}
	])

	console.log(actual);

	t.true(actual.isGameOver, 'Game over boolean not set')
	t.is(actual.currentQuestionId, state.questions.length, 'On the wrong question')

})