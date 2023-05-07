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

let calculation: (x: number, y: number, type: string) => number

calculation = (a: number, b: number, type: string) => {
    if (type === 'add') {
        return a + b
    } else {
        return a - b
    }
}
console.log(calculation(1, 2, 'add'))

let userDetails: (userInfo: {
    name: string,
    age: number
}) => string

userDetails = (userInfo: {
    name: string,
    age: number
}) => {
    return userInfo.name
}