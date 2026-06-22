const sum = require("./sum");
const capitalize = require("./algorithm");
const analyzeArray = require("./analyzeArray");
const caesarCipher = require("./caesarCipher");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// test("capitilize coding to equal Coding", () => {
//   expect(capitalize("coding")).toBe("Coding");
// });

test("analyzeArray returns correct stats", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
test("caesarCipher returns correct string", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
