function add(n1:number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        console.log(phrase+ result);
    } else {
        return result
   }
}

const number: number = 5
const number1: number = 2.8
const printResult: boolean = true;
const resultPhrase: string = `Result is: `

add(number, number1, printResult, resultPhrase);

