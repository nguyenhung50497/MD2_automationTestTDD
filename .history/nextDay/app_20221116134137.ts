export class NextDayCalculator {
    private _Day: Date;

    constructor(Day: Date) {
        this._nextDay = nextDay;
    }

    public getNextDay(): Date {
        return this._nextDay;
    }
    public setNextDay(nextDay: Date) {
        this._nextDay = nextDay;
    }


}