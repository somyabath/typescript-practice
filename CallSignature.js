var student1 = {
    fname: "siya",
    age: 23,
    class: 3,
    greet: (function (country) { return "name  is  ".concat(student1.fname, " and age is ").concat(student1.age, " and class  name is ").concat(student1.class, " "); })
};
// const introduction:(student1:Student)=>void=(student1:Student):string=>{
// const{fname,age} =student1;
// return `name  is ${fname} and age is ${age}`
// }
// console.log(introduction(student1))
console.log(student1.greet('India'));