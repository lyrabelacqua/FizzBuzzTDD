const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz function', () => {
    it('returns Fizz for multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(96)).toBe('Fizz');
    })

    it('returns Buzz for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(55)).toBe('Buzz')
    })

    it('returns FizzBuzz for multiples of both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(360)).toBe('FizzBuzz');
    })

    it('returns the number back in all other cases', () => {
        expect(fizzBuzz(11)).toBe(11);
        expect(fizzBuzz(667)).toBe(667);
    })

    it('ignores not-number values', () => {
        expect(fizzBuzz('Test')).toBe(undefined);
        expect(fizzBuzz([1, 2, 3])).toBe(undefined);
        expect(fizzBuzz({})).toBe(undefined);
    })
})