export class NextDayCalculator {
    private _day: Date;

    constructor(day: Date) {
        this._day = nextDay;
    }

    public getNextDay(): Date {
        return this._nextDay;
    }
    public setNextDay(nextDay: Date) {
        this._nextDay = nextDay;
    }


}