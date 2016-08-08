/*
 * When true flatten array will ignore non integer values in the array variable,
 * when false processing will stop and an exception will be thrown.
 */
var runPassively = true;

/**
 * flattenArray: convert a nested array into a flattened single depth array.
 *
 * @param array: the nested multi depth array to flatten.
 * @param flatArray: Optional. a starting point for the recursive call, the flattened array will be added to this recursively and returned.
 *
 * @return : the single depth, flattened array.
 */
function flattenArray(array, flatArray) {
  if (!Array.isArray(array)) {
    throw "flattenArray needs to be passed an array as the first argument.";
  }

  if (flatArray == undefined) { // Initialize flatArray if a starting point was not provided.
    flatArray = [];
  }

  /*
   * Iterate array either adding to flatArray an int element or calling flattenArray on an array element.
   */
  for (var element of array) {
    if (Array.isArray(element)) {
      // element is array, make recursive call.
      flattenArray(element, flatArray);
    } else if (!isInt(element)) {
      // This is not an integer and cannot be added to the array.
      console.error("Array element " + element + " cannot be parsed into a number!");

      // If the option is set to die here do so, otherwise ignore and move on.
      if (!runPassively) {
        throw "Array element " + element + " cannot be parsed into a number!";
      }   
    } else {
      // Element is an int, push it onto the flat array.
      flatArray.push(parseInt(element));
    }
  }

  // Return the flattened array.
  return flatArray;
}

/**
 * isInt : a helper method to determing whether an object is an int. Return true for integers and their string counterparts (1, 1.0 '1.0' and '1')
 * @param element : the element to test 
 * @return false for non integer values ('1.1' and 3.2 and 'a')
 */
function isInt(element) {
  return parseInt(element, 10) == element;
}

var test1 = [1,2,3,4,[5,6,[7,[8,9,[0]]]]];
var test2 = [1,2,[3,4],5,[6,[7,8],9,[0]]];
var test3 = ['1','2',['3.0','4'],'5',[6.0,["7",'8'],9,[0]]];
var test4 = [1.2,3.4,[5.6, 6.0], 7.8, ['9.0']];
var test5 = [1,2.3,[4.5,6,[7,8],9.0],'a','b','c'];

// Test with flattenArray(test1); etc.

