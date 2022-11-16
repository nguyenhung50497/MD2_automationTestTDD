export class NextDayCalculator {

    public nextDay(): void {
        let day = new Date();
        day.getDate() + 1;
    }
}