import test from "ava";
import logic from "./calculator-logic";


// Math tests

test("Add: x + y", (t) => {
	// Arrange
	const x = 1;
	const y = 2;
	const expected = 3;

	// Act
	const actual = logic.addition(x,y);

	// Assert
	t.is(actual, expected);
});

test("Add: y + x", (t) => {
	// Arrange
	const x = 1;
	const y = 2;
	const expected = 3;

	// Act
	const actual = logic.addition(y,x);

	// Assert
	t.is(actual, expected);
});

test("Subtraction: x - y", (t) => {
	// Arrange
	const x = 1;
	const y = 2;
	const expected = -1;

	// Act
	const actual = logic.subtraction(x,y);

	// Assert
	t.is(actual, expected);
});

test("Subtraction: y - x", (t) => {
	// Arrange
	const x = 1;
	const y = 2;
	const expected = -1;

	// Act
	const actual = logic.subtraction(y,x);

	// Assert
	t.not(actual, expected);
});

test("Multiply: x * y", (t) => {
	// Arrange
	const x = 2;
	const y = 2;
	const expected = 4;

	// Act
	const actual = logic.multiplication(x,y);

	// Assert
	t.is(actual, expected);
});

test("Multiply: y * x", (t) => {
	// Arrange
	const x = 2;
	const y = 2;
	const expected = 4;

	// Act
	const actual = logic.multiplication(y,x);

	// Assert
	t.is(actual, expected);
});

test("Divide: x / y", (t) => {
	// Arrange
	const x = 10;
	const y = 5;
	const expected = 2;

	// Act
	const actual = logic.division(x,y);

	// Assert
	t.is(actual, expected);
});

test("Divide: y / x", (t) => {
	// Arrange
	const x = 10;
	const y = 5;
	const expected = 2;

	// Act
	const actual = logic.division(y,x);

	// Assert
	t.not(actual, expected);
});

//String tests

test("Subtraction: First parameter cannot be a string", (t) => {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws( () => {
        const result = logic.subtraction(x,y);
        return result;
    });
});

test("Subtraction: Second parameter cannot be a string", (t) => {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws( () => {
        const result = logic.subtraction(x,y);
        return result;
    });
});

test("Addition: First parameter cannot be a string", (t) => {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws( () => {
        const result = logic.addition(x,y);
        return result;
    });
});

test("Addition: Second parameter cannot be a string", (t) => {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws( () => {
        const result = logic.addtion(x,y);
        return result;
    });
});

test("Multiplication: First parameter cannot be a string", (t) => {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws( () => {
        const result = logic.multiplication(x,y);
        return result;
    });
});

test("Multiplication: Second parameter cannot be a string", (t) => {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws( () => {
        const result = logic.multiplication(x,y);
        return result;
    });
});

test("Division: First parameter cannot be a string", (t) => {
	// Arrange
	const x = 'b';
    const y = 2;

    // Act
    // Assert
    t.throws( () => {
        const result = logic.division(x,y);
        return result;
    });
});

test("Division: Second parameter cannot be a string", (t) => {
	// Arrange
	const x = 1;
    const y = 'c';

    // Act
    // Assert
    t.throws( () => {
        const result = logic.division(x,y);
        return result;
    });
});

// Testing for bad math

test("Division: First parameter cannot be a zero", (t) => {
	// Arrange
	const x = 0;
    const y = 2;

    // Act
    // Assert
    t.throws( () => {
        const result = logic.division(x,y);
        return result;
    });
});

test("Division: Second parameter cannot be a zero", (t) => {
	// Arrange
	const x = 1;
    const y = 0;

    // Act
    // Assert
    t.throws( () => {
        const result = logic.division(x,y);
        return result;
    });
});

// Testing for oversize parameters

test("Add: Parameters cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740999;
	const y = -9007199254740999;

	// Act
	t.throws( () => {
		const result = logic.addition(x,y);
		return result;
	});

	// Assert

});

test("Subtract: Parameters cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740999;
	const y = -9007199254740999;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.subtraction(x,y);
		return result;
	});

});

test("Divide: Parameters cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740999;
	const y = -9007199254740999;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.division(x,y);
		return result;
	});

});

test("Multiply: Parameters cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740999;
	const y = -9007199254740999;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.multiplication(x,y);
		return result;
	});

});

test("Add: Result cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740990;
	const y = 2;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.addition(x,y);
		return result;
	});

});

test("Subtract: Result cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740990;
	const y = -2;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.subtraction(x,y);
		return result;
	});

});

test("Divide: Result cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740990;
	const y = .5;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.division(x,y);
		return result;
	});

});

test("Multiply: Result cannot exceed max safe value", (t) => {
	// Arrange
	const x = 9007199254740990;
	const y = 2;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.multiplication(x,y);
		return result;
	});

});

test("Add: Result cannot exceed minimum safe value", (t) => {
	// Arrange
	const x = -9007199254740990;
	const y = -2;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.addition(x,y);
		return result;
	});

});

test("Subtract: Result cannot exceed minimum safe value", (t) => {
	// Arrange
	const x = -9007199254740990;
	const y = 2;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.subtraction(x,y);
		return result;
	});

});

test("Divide: Result cannot exceed minimum safe value", (t) => {
	// Arrange
	const x = -9007199254740990;
	const y = -.5;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.division(x,y);
		return result;
	});

});

test("Multiply: Result cannot exceed minimum safe value", (t) => {
	// Arrange
	const x = -9007199254740990;
	const y = 2;

	// Act
	// Assert
	t.throws( () => {
		const result = logic.multiplication(x,y);
		return result;
	});

});