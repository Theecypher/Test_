function reverseString(letter) {
  let addedLength = letter.length;
  let arr = [];

  let str;

  for (let i = addedLength; i >= 0; i--) {
    if (i === -1) {
      break;
    }

    arr.push(letter[i]);

    arr.join(",");

    str = arr.join("");
  }
  return str;
}

console.log(reverseString("hello"));

// module.exports = reverseString ;
