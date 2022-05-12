const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('3. earthlingsStr string', () => {
    test('The variable "earthlingsStr" should exist', () => {
        const earthlingsStr = solution.__get__('earthlingsStr')
        expect(earthlingsStr).toBeDefined()
    });
    test('earthlingsStr should contain string', () => {
        const earthlingsStr = solution.__get__('earthlingsStr')
        const text = 'Hello Earthling'
        expect(earthlingsStr).toBe(text)
    })
    test('should print the text lower cased to the console', () => {
        const solution = require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith('hello earthling');
    })
})