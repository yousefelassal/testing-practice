const analyzeArray = require('./functions').arrayAnalysis;

describe('Analyze Array', () => {
    test('Analyze Array (1)', () => {
        expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });
    
    test('Analyze Array (2)', () => {
        expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
            average: 5,
            min: 1,
            max: 9,
            length: 9
        });
    });

    test('Analyze Array (3)', () => {
        expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
            average: 5.5,
            min: 1,
            max: 10,
            length: 10
        });
    });

    test('Analyze Array (4)', () => {
        expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).not.toBe({
            average: 5.5,
            min: 1,
            max: 10,
            length: 10
        });
    });
});