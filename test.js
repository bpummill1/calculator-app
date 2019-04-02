import test from "ava";
import foo from "./calculator-logic";

test("ben's cool test", function (t) {
	// Arrange
    const name = 'Raul';

    // Act
    const bar = foo.greet(name);
	
	// Assert
	t.is(bar, 'Hi, my name is Raul');
});


test("I add things", function(t) {
	// Arrange
	const x = 1;
	const y = 2;
	const expected = 3;

	// Act
	const actual = foo.math(x,y);

	// Assert
	t.is(actual, expected);
});

test("First parameter cannot be a string", function(t) {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws(function () {
        const result = foo.math(x,y);
        return result;
    });
});

test("Second parameter cannot be a string", function(t) {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws(function () {
        const result = foo.math(x,y);
        return result;
    });
});