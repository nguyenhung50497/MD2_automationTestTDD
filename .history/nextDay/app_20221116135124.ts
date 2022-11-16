export class NextDayCalculator {
    

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
        this._day.getDate() + 1;
    }
}