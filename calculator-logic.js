
const logic = {
    subtraction: function(x,y) {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x - y;
        return z;
    },
    addition: function(x,y) {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x + y;
        return z;
    },
    multiplication: function(x,y) {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x * y;
        return z;
    },
    division: function(x,y) {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x / y;
        return z;
    },

};


module.exports = logic;