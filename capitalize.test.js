const capitalize = require('./functions').capitalize;

describe('Capitalize', () => {
    test('Capitalize first letter of string (1)', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    
    test('Capitalize first letter of string (2)', () => {
        expect(capitalize('sha3bola')).toBe('Sha3bola');
    });

    test('String did change', () => {
        expect(capitalize('hello')).not.toBe('hello');
    });
});