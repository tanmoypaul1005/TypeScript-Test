// function
type stringOrNumber = string | number

let multiple: Function

multiple = (a: number, b: number, c?: stringOrNumber, d: number = 10): number => {
    return a + b
}
console.log(multiple(1, 2))

const multiple2 = (a: number, b: number, c: { name: string, age: number, d: stringOrNumber }): number => {
    return a + b
}

let myFun: (x: number, y: number) => number