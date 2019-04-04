import test from "ava";
import operators from "./calculator-logic";

test("I add things", function(t) {
	// Arrange
	const x = 1;
	const y = 2;
	const expected = 3;

	// Act
	const actual = operators.addition(x,y);

	// Assert
	t.is(actual, expected);
});

test("Subtraction: First parameter cannot be a string", function(t) {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws(function () {
        const result = operators.subtraction(x,y);
        return result;
    });
});

test("Subtraction: Second parameter cannot be a string", function(t) {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws(function () {
        const result = operators.subtraction(x,y);
        return result;
    });
});

test("Addition: First parameter cannot be a string", function(t) {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws(function () {
        const result = operators.addition(x,y);
        return result;
    });
});

test("Addition: Second parameter cannot be a string", function(t) {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws(function () {
        const result = operators.addtion(x,y);
        return result;
    });
});