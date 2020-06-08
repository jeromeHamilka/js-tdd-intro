// test/capitalizeFirstLetters.test.js
const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

// give the test suite a label using describe
describe("capitalizeFirstLetters", () => {
  // give the test a label using it
  it("is a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transforms a string with few words correctly", () => {
    assert.strictEqual(
      capitalizeFirstLetters("I am a Wilder"),
      "I Am A Wilder"
    );
  });

  it("works with a string of one word", () => {
    assert.strictEqual(capitalizeFirstLetters("hello"), "Hello");
  });

  it("works with an empty string", () => {
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
