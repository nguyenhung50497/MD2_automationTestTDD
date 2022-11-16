export class NextDayCalculator {
    private _day: Date;

    constructor(day: Date) {
        this._day = day;
    }

    public getDay(): Date {
        return this._day;
    }
    public setDay(nextDay: Date) {
        this._nextDay = nextDay;
    }


}