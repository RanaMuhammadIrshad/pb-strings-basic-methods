const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('6. old_newStr string', () => {
    test('The variable "newStr" should exist', () => {
        const newStr = solution.__get__('newStr')
        expect(newStr).toBeDefined()
    });
    test('The variable "oldStr" should exist', () => {
        const oldStr = solution.__get__('oldStr')
        expect(oldStr).toBeDefined()
    });
    test('newStr should contain modified string', () => {
        const solutionFile = require('../solution')
        const oldStr = solution.__get__('oldStr')
        expect(consoleSpy).toHaveBeenCalledWith(`${oldStr[0]}${oldStr}${oldStr[0]}`)
    })
})