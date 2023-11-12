"use strict";
let a;
// a=4 invalid
// a="" valid
let b;
// b="4" invalid
// b=4 valid
let c;
//array
let array1 = [""];
let array2 = [];
array2 = [1, 2, 3, "kk"];
//object
let obj1 = { name: "", age: 0 };
const myFun = (a, b, c = "Hello") => {
    return a + b;
};
