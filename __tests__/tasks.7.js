const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('7. scritcherStr string', () => {
    const scritcherStr = solution.__get__('scritcherStr')

    test('The variable "scritcherStr" should exist', () => {
        expect(scritcherStr).toBeDefined()
    });
    test('The variable "scritcherStr" length is >= 3', () => {
        expect(scritcherStr.length).toBeGreaterThanOrEqual(3);
    });
    test('should print scritcherStr with last three char appended', () => {
        const solution = require('../solution')
        const lastThree = scritcherStr.substring(scritcherStr.length - 3);
        const result = `${lastThree}${scritcherStr}${lastThree}`
        expect(consoleSpy).toHaveBeenCalledWith(result);
    })
})