// Power N
// First solve this algorithm iteratively, then recursively.
// Given base and n that are both 1 or more, compute recursively (no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).

// function powerN(base, exponent) {
//   if (exponent == 0)
//     return 1;
//   else
//     return base * powerN(base, exponent - 1);
// }

function powerN(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result*=base;
  }
  return result;
}



console.log(powerN(3, 1)); // should give 3
console.log(powerN(3, 2)); // should give 9
console.log(powerN(3, 3)); // should give 27


// index    result
// o        1*3
// 1        3*3