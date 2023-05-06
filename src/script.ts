// function

let multiple: Function

multiple = (a: number, b: number, c?: string|number, d: number = 10): number => {
    return a + b
}
console.log(multiple(1, 2))

const multiple2 = (a: number, b: number, c: {name:string ,age:number}): number => {
    return a + b
}