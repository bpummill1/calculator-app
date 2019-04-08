
const logic = {
    subtraction: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x - y;
        return z;
    },
    addition: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x + y;
        return z;
    },
    multiplication: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x * y;
        return z;
    },
    division: (x,y) => {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x / y;
        return z;
    },

};


module.exports = logic;