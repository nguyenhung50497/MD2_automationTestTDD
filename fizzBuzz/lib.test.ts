import {fizzBuzz} from './lib'

describe('test fizzBuzz()', () => {
    test('phai tra ve gia tri FizzBuzz', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });
    

});