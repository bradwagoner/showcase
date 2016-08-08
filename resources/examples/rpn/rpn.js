/**
 * A reverse polish notation calculator.
 *
 * Test by passing the strings:
 * '5 2 3 ^ + 5 8 + = 13'
 * '3 2 * 11 - = -5'
 * '4 - + 2 -3 + = -1'
 */
  var operators = ['+', '-', '*', '/'];
  function evalRPN(rpn) {
    var rpnArray = rpn.split(' ');

    var equation = "";
    for (var rpnIndex=0; rpnIndex<rpnArray.length; rpnIndex++) {
      if (operators.indexOf(rpnArray[rpnIndex + 1]) != -1) {
        equation = equation + rpnArray[rpnIndex + 1] + " " + rpnArray[rpnIndex];
        rpnIndex++;
      } else {
	equation = equation + rpnArray[rpnIndex];
      }
    }

    console.log("Evaluating '" + equation + "'");
    var result = eval(equation);
    console.log("Result '" + result + "'");
  }
