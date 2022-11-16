import {NextDayCalculator} from './app'
describe('NextDayCalculator Test', () => {
    let nextDay: NextDayCalculator = new NextDayCalculator();
    test('return 1/1/2018', () => {
        expect(nextDay.nextDay(new Date('1-1-2018'))).toBe('2-1-2018');
    })

    test('return 1/2/2018', () => {

})