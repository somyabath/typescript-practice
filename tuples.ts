// As we know array consists of values of homogeneous (same) types but sometimes when we need to store a collection of a different types values in a single variable, then we will go with Tuples. Tuples are fixed in size but array are not.and with the help of readonly the personInfo is fixed we cant push in them like array.
// type personInfo = [string, number, boolean];
// const person: personInfo = ["rohit", 28, true];
// console.log(person);
// person[0]='riya'
//  console.log(person);

type personInfo = readonly [string, number, boolean];
const person: personInfo = ["rohit", 28, true];
// person.push(2, "Bill"); can't push because it is fixed due to readonly method

console.log(person);

// Updating the first element
// person[0] = 'riya';

console.log(person);

