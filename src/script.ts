type stringOrNumber= string | number;
type userType={name:string,age:number}

const userDetails=(id:stringOrNumber,details:userType)=>{
    console.log(`user is id ${id} and details are ${details.name} and age ${details.age}`);
}

const seyHello=(id:stringOrNumber,details:userType)=>{
    console.log(`user is id ${id} and details are ${details.name} and age ${details.age}`);
}