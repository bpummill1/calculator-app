let x = function () {
    console.log("bacon")
};

let taco = 'taco';

let f = function(param) {
    setTimeout(param, 2000);
    console.log("function");
    param();
};

f( () => {
    console.log("bacon");
    f( x );
}); 