import * as React from 'react'
import { default as test } from 'ava'
import reducers from './reducers'
import {ANSWER_QUESTION, AppStateType, QuestionType} from './types'

/**
 * Generator to give us predictable questions to populate state
 */
function* mockQuestion(): Generator<QuestionType> {
	let i = 0
	let answer = true

	while (true) {
		yield(
			{
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

const getQuestion = mockQuestion()

const initialState: AppStateType = {
	isLoading: false,
	isGameStarted: false,
	isGameOver: false,
	currentQuestion: 0,
	questions: [getQuestion.next().value],
	correctAnswers: 0,
	incorrectAnswers: 0
}


test('should update game state for ANSWER_QUESTION dispatch', t => {
	const state = initialState

	const actual = reducers(state, {
		type: ANSWER_QUESTION,
		payload: {
			answer: true,
			questionNumber: 0
		}
	})

	const expected = state.questions[0]

	expected.answer = true

	t.deepEqual(actual, {
		isLoading: false,
		isGameStarted: false,
		isGameOver: true,
		currentQuestion: 1,
		questions: [
			expected
		],
		correctAnswers: 1,
		incorrectAnswers: 0
	})
})

test('game should end when all questions have been answered', t => {
	let state = initialState
	let actual = state
	// populate with questions
	state.questions = Array(2).fill(2).map(() => getQuestion.next().value)
	
	actual = reducers(state, {
		type: ANSWER_QUESTION,
		payload: {
			answer: true,
			questionNumber: 0
		}
	})

	actual = reducers(actual, {
		type: ANSWER_QUESTION,
		payload: {
			answer: true,
			questionNumber: 1
		}
	})

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

	t.true(actual.isGameOver, 'Game over boolean not set')
	t.is(actual.currentQuestion, state.questions.length, 'On the wrong question')

})