// test/Rectangle.test.js
const assert = require("assert");
const Rectangle = require("../Rectangle");

// give the test suite a label using describe
describe("Rectangle", () => {
  // give the test a label using it
  it("is a square function", () => {
    let squaretrue = new Rectangle(3, 3);
    assert.strictEqual(squaretrue.isSquare(3, 3), true);
  });

  it("is't a square function", () => {
    let squarefalse = new Rectangle(13, 7);
    assert.strictEqual(squarefalse.isSquare(13, 7), false);
  });

  it("return correct area", () => {
    let area = new Rectangle(13, 7);
    assert.strictEqual(area.getArea(13, 7), 91);
  });

  it("return correct perimeter", () => {
    let perimeter = new Rectangle(13, 7);
    assert.strictEqual(perimeter.getPerimeter(13, 7), 40);
  });
});
