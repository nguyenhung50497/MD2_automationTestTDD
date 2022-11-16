export class NextDayCalculator {
    private _nextDay: Date;

    constructor(nextDay: Date) {
        this._nextDay = nextDay;
    }
    public get nextDay(): Date {
        return this._nextDay;
    }
    
}