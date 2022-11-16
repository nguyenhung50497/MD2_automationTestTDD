import {NextDayCalculator} from './app'
describe('NextDayCalculator Test', () => {
    let nextDay: NextDayCalculator = new NextDayCalculator();
    test('return 1/1/2018', () => {
        expect(nextDay.nextDay(new Date(''))).toBe()
    })
})