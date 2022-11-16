export class NextDayCalculator {
    private _nextDay: Date;

    constructor(nextDay: Date) {
        this._nextDay = nextDay;
    }

    public getextDay(): Date {
        return this._nextDay;
    }
    public set nextDay(nextDay: Date) {
        this._nextDay = nextDay;
    }
}