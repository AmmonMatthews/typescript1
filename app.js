function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number = 5;
var number1 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number, number1, printResult, resultPhrase);
