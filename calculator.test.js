const calculator = require('./functions').calculator;

describe('Calculator', () => {
    test('Addition', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    
    test('Subtraction', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
    });

    test('Division', () => {
        expect(calculator.divide(4, 2)).toBe(2);
    });

    test('Multiplication', () => {
        expect(calculator.multiply(2, 2)).toBe(4);
    });
});