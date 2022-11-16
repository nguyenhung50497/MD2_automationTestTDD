export class NextDayCalculator {
    private _day: Date = new Date();

    constructor(day: Date) {
        this._day = day;
    }

    public getDay(): Date {
        return this._day;
    }
    public setDay(day: Date) {
        this._day = day;
    }

    public nextDay(): void {
        return this._day.getDate() + 1;

    }




}