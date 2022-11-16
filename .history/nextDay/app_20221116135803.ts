export class NextDayCalculator {
    public nextDay(date: Date): void {
        date.getDate() + 1;
    }
}

let nextDayCalculator = new NextDayCalculator;
nextDayCalculator.nextDay(new Date('1-1-2018'))