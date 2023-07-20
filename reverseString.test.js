const reverseString = require('./functions').reverseString;

describe('Reverse String', () => {
    test('Reverse string (1)', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    
    test('Reverse string (2)', () => {
        expect(reverseString('sha3bola')).toBe('alob3ahs');
    });

    test('String did change', () => {
        expect(reverseString('hello')).not.toBe('hello');
    });
});