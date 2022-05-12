const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('10. Capitalize first Letter', () => {
    test('The variable "foxStr" should exist', () => {
        const foxStr = solution.__get__('foxStr')
        expect(foxStr).toBeDefined()
    });
    test('The variable "foxStr" should have correct text', () => {
        const foxStr = solution.__get__('foxStr')
        expect(foxStr).toBe("the quick brown fox")
    });
    test('should print foxStr capitalized', () => {
        const solution = require('../solution')
        const result = "The quick brown fox"
        expect(consoleSpy).toHaveBeenCalledWith(result);
    })
})