import {Triangle} from './app'

describe('Triangle Test', () => {
    let triangle = new Triangle;

    test('Return tam giac deu', () => {
        expect(triangle.isTriangle(2, 2, 2)).toBe('Tam giac deu');
    })
    test('Return tam giac vuong', () => {
        expect(triangle.isTriangle(3, 4, 5)).toBe('Tam giac vuong');
    })
    test('Return tam giac deu', () => {
        expect(triangle.isTriangle(2, 2, 2)).toBe('Tam giac deu');
    })
    test('Return tam giac deu', () => {
        expect(triangle.isTriangle(2, 2, 2)).toBe('Tam giac deu');
    })
})