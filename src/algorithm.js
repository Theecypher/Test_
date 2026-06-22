function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

// alert(pow(2, 3)); // 8
console.log(pow(2, 2));
console.log(pow(2, 3));
console.log(pow(2, 4));





// console.log(Calculator.add(5, 4));
// console.log(Calculator.divide(5, 4));
// console.log(Calculator.multiply(5, 4));
// console.log(Calculator.subtract(5, 4));

// console.log(reverseString("coding"));
// reverseString("coding");
// reverseString("classy");
// reverseString("beautiful");
// reverseString("mma");
// reverseString("The beautiful black dog");

// console.log(capitalize("mma"));
// console.log(capitalize("beautiful"));
// console.log(capitalize("value"));
// console.log(capitalize("coding"));
// console.log(capitalize("the white dog sat on the blue fence"));

// module.exports = capitalize;
