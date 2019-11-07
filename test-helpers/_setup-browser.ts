/* eslint-disable no-undef */
/**
 * Setup JSDOM environment, based on
 * https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
 */
import {JSDOM} from 'jsdom'

/**
 * Create a custom namespace for our JSDOM
 */
declare global {
  namespace NodeJS {
    interface Global {
       document: Document,
       window: Window,
       navigator: {
        userAgent: string
       },
       requestAnimationFrame: (callback: () => void) => ReturnType<typeof setTimeout>,
       cancelAnimationFrame: (id: ReturnType<typeof setTimeout>) => ReturnType<typeof clearTimeout>
    }
  }
}

const jsdom: JSDOM = new JSDOM('<!doctype html><html><body></body></html>')
const { window: jsDomWindow } = jsdom

function copyProps(src: object, target: object): void {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = jsDomWindow;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
}
global.requestAnimationFrame = function (callback: () => void): ReturnType<typeof setTimeout> {
  return setTimeout(callback, 0)
}
global.cancelAnimationFrame = function (id: ReturnType<typeof setTimeout>): void {
  clearTimeout(id)
}
copyProps(window, global)