export class NextDayCalculator {
    public nextDay(date: Date): da {
        date.getDate() + 1;
    }
}

let nextDayCalculator = new NextDayCalculator;
console.log(nextDayCalculator.nextDay(new Date('1-1-2018')))