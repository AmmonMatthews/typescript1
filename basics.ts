function add(n1:number, n2:number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        console.log(phrase+ result);
    } else {
        return result
   }
}
//Manually describing the type of the variable
let number: number;
number = 5
//infering the type with these variables
const number1 = 2.8
const printResult = true;
const resultPhrase= `Result is: `

add(number, number1, printResult, resultPhrase);

