const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('1. parkWalkStr string', () => {
    test('The variable "parkWalkStr" should exist', () => {
        const parkWalkStr = solution.__get__('parkWalkStr')
        expect(parkWalkStr).toBeDefined()
    });
    test('parkWalkStr should contain string', () => {
        const parkWalkStr = solution.__get__('parkWalkStr')
        const text = 'I can walk in the park all day!'
        expect(parkWalkStr).toBe(text)
    })
    test('should print the word "parK" to the console', () => {
        const solution = require('../solution')
        expect(consoleSpy).toHaveBeenCalledWith("park");
    })
})