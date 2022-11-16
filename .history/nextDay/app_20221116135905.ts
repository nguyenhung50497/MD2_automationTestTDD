export class NextDayCalculator {
    public nextDay(date: Date): Date {
         date.getDate() + 1;
    }
}

let nextDayCalculator = new NextDayCalculator;
console.log(nextDayCalculator.nextDay(new Date('1-1-2018')))