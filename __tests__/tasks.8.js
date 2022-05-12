const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('8. boogieNightsStr string', () => {
    const boogieNightsStr = solution.__get__('boogieNightsStr')

    test('The variable "boogieNightsStr" should exist', () => {
        expect(boogieNightsStr).toBeDefined()
    });
    test('The variable "boogieNightsStr" length is >= 2', () => {
        expect(boogieNightsStr.length).toBeGreaterThanOrEqual(2);
    });
    test('should print boogieNightsStr with first and last char switched', () => {
        const solution = require('../solution')
        const firstLetter = boogieNightsStr[0];
        const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
        const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
        const result = `${lastLetter}${remainderString}${firstLetter}`
        expect(consoleSpy).toHaveBeenCalledWith(result);
    })
})