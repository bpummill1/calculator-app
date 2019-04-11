
const logic = {
    subtraction: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        else if (x > 9007199254740991 || x < -9007199254740991 || y > 9007199254740991 || y < -9007199254740991 ) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        else if ( x - y > 9007199254740991 || y - x > 9007199254740991 ||  x - y < -9007199254740991 || y - x < -9007199254740991) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        const z = x - y;
        return z;
    },
    addition: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        else if (x > 9007199254740991 || x < -9007199254740991 || y > 9007199254740991 || y < -9007199254740991 ) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        else if ( x + y > 9007199254740991 ||  x + y < -9007199254740991 ) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        const z = x + y;
        return z;
    },
    multiplication: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        else if (x > 9007199254740991 || x < -9007199254740991 || y > 9007199254740991 || y < -9007199254740991 ) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        else if ( x * y > 9007199254740991 ||  x * y < -9007199254740991) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        const z = x * y;
        return z;
    },
    division: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        else if (x > 9007199254740991 || x < -9007199254740991 || y > 9007199254740991 || y < -9007199254740991 ) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        else if ( x === 0 || y === 0) {
            throw new Error("Cannot divide zero or divide by zero!");
        }
        else if ( x / y > 9007199254740991 || y / x > 9007199254740991 ||  x / y < -9007199254740991 || y / x < -9007199254740991) {
            throw new Error("You've exceeded the max/min safe integer value. Use smaller numbers.");
        }
        const z = x / y;
        return z;
    },

};


module.exports = logic;