function capitalize(letter) {
  let splitValue = letter.split("");

  let value = splitValue[0].toUpperCase();
  let format = letter.split("").with(0, value).join("");

  return format;
}