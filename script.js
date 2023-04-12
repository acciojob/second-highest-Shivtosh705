//your JS code here. If required.
function secondHighest(arr) {
  // check if array has at least 2 elements
  if (arr.length < 2) {
    return -Infinity;
  }

  // initialize max and secondMax variables
  let max = arr[0];
  let secondMax = -Infinity;

  // iterate through the array to find the max and secondMax elements
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i];
    if (curr > max) {
      secondMax = max;
      max = curr;
    } else if (curr > secondMax && curr !== max) {
      secondMax = curr;
    }
  }

  // if all elements are the same, return -Infinity
  if (secondMax === -Infinity) {
    return -Infinity;
  }

  // return the second highest element
  return secondMax;
}

// example usage
console.log(secondHighest(arr)); // output: 4
 // output: -Infinity
