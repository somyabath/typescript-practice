type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: { Country: string; City: string };
};

const person1: Person = {
  name: "poonrima",
  age: 26,
  isStudent: true,
  address: {
    Country: "India",
    City: "Gwalior",
  },
};

const person2: Person = {
  name: "gargi",
  age: 26,
  isStudent: true,
  address: {
    Country: "India",
    City: "Gwalior",
  },
};

const person3: Person = {
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

type products={
  name:string;
  price:number;
  quantity:number;
  version:number
}
const proudcts:products={
  name:'laptop',
  price:23000,
  quantity : 4,
  version:8.9
}
console.log(`The q${proudcts.name} Quantity is ${proudcts.quantity} and ${proudcts.version}`)