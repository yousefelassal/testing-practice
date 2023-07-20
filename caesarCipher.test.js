const caesarCipher = require('./functions').caesarCipher;

describe('Caesar Cipher', () => {
    test('Caesar Cipher (1)', () => {
        expect(caesarCipher('hello', 1)).toBe('ifmmp');
    });
    
    test('Caesar Cipher (2)', () => {
        expect(caesarCipher('sha3bola', 2)).toBe('ujc3dqnc');
    });

    test('Z to A', () => {
        expect(caesarCipher('z', 1)).toBe('a');
    });

    test('Case sensitivity', () => {
        expect(caesarCipher('Hello', 1)).toBe('Ifmmp');
    });

    test('Special characters', () => {
        expect(caesarCipher('Hello!', 1)).toBe('Ifmmp!');
    });

    test('String did change', () => {
        expect(caesarCipher('hello', 1)).not.toBe('hello');
    });
});