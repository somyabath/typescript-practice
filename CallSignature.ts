type Student = {
  fname: string;
  age: number;
  class: number;
  gender?: string;
  greet:(country:string)=>string ///call signature
};
const student1: Student = {
  fname: "siya",
  age: 23,
  class: 3,
  greet: ((country):string => `name  is  ${student1.fname} and age is ${student1.age} and class  name is ${student1.class} `)
};
// const introduction:(student1:Student)=>void=(student1:Student):string=>{
// const{fname,age} =student1;
// return `name  is ${fname} and age is ${age}`
// }

// console.log(introduction(student1))
console.log(student1.greet('India'))