const person = {
    greet: function(name) {
        return `Hi, my name is ${name}`;
    },
    math: function(x,y) {
        if (typeof x === "string"  || typeof y === "string") {
            throw new Error("insert a number dummy!");
        }
        const z = x + y;
        return z;
    },

};

module.exports = person;