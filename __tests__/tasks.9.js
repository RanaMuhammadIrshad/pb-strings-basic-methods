const rewire = require("rewire")
const solution = rewire('../solution')

beforeAll(() => consoleSpy = jest.spyOn(console, 'log'))

describe('9. Description about yourself', () => {

    test('The variable "firstName" should exist', () => {
        const firstName = solution.__get__('firstName')
        expect(firstName).toBeDefined()
    });
    test('The variable "city" should exist', () => {
        const city = solution.__get__('city')
        expect(city).toBeDefined()
    });
    test('The variable "job" should exist', () => {
        const job = solution.__get__('job')
        expect(job).toBeDefined()
    });
    test('should print sentence containing values of "firstName", "city" and "job"', () => {
        const firstName = solution.__get__('firstName')
        const city = solution.__get__('city')
        const job = solution.__get__('job')
        const regex = new RegExp(`(?=.*${firstName})(?=.*${city})(?=.*${job})`);
        require("../solution");

        const outputFound = consoleSpy.mock.calls.find(call => regex.test(call.join(' ')))
    })
})
