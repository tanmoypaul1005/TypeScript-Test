let a:string;
// a=4 invalid
// a="" valid

let b:number;
// b="4" invalid
// b=4 valid

let c:string | number;

//array
let array1:string[]=[""];

let array2: (number | string)[] = []
array2 = [1, 2, 3, "kk"]


//object
let obj1: { name: string,age: number} = { name: "",age: 0}

const myFun=(a:number,b:number,c:string="Hello"):(number | string) =>{
   return a+b
}
