export class Triangle {
    isTriangle(a: number, b: number, c: number): string {
        if (a === b && b === c) return "Tam giac deu";
        if ((a*a === (b*b + c*c)) || (b*b === (c*c + a*a)) || (c*c === (a*a + b*b))) return "Tam giac vuong";
        if ((a+b)>c || (b+c)>a || (a+c)>b) {
            if (a === b || b === c) return "
        }
    }
}