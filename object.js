var person1 = {
    name: "poonrima",
    age: 26,
    isStudent: true,
    address: {
        Country: "India",
        City: "Gwalior",
    },
};
var person2 = {
    name: "gargi",
    age: 26,
    isStudent: true,
    address: {
        Country: "India",
        City: "Gwalior",
    },
};
var person3 = {
    name: "somya",
    age: 26,
    isStudent: true,
    address: {
        Country: "India",
        City: "Gwalior",
    },
};
console.log(person1.address.City);
person1.address.City = "indore";
person1.address.City = "Banglore";
console.log(person1.address.City);
var proudcts = {
    name: 'laptop',
    price: 23000,
    quantity: 4,
    version: 8.9
};
console.log("The".concat(proudcts.name, " Quantity is ").concat(proudcts.quantity, " and ").concat(proudcts.version));
