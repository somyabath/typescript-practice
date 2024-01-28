// objects in js
const person = {
    name: 'vishal',
    3: 99,
    age: 23,
    isEducator: true,
    skilss: ['c++', 'js', 'python'],
    project: {
        'Frontend deve': 'Frontend Devlopet projects'
    },
    code: function() {
        return 'start coding'

    },
    walk: function() {
        return 'start walking'
    }
}
let data = []
    // console.log(person.walk())
    // console.log(person.skilss[0], person.project["Frontend deve"])
    // data.push(person)
    // console.log(data)
    // console.log(person)
    // person.name = 'vivek'
    // person.location = 'New Delhi'
    // console.log(person.name)
    // console.log(person)
    // delete person.name
    // console.log(person)

// Object can be add, update, delete

// shallow copy
const person2 = person
person2.isEducator = false
person
person2

//Deep copy =
const person3 = Object.assign({}, person)
    // this assign method also create shalow copy of nested objects
person3.skilss = null
person3
person
// console.log(person3)
// Object Methods
//     //difference between freeze and seal method in objects
//     // seal  can not add,delete but update
//     // freeze can not add,delete,update

// // Methods in objects:-


// Object.freeze(person)
// console.log(person)
// person.age = 15
// person.zyas = 'pp'
// console.log(person)
// console.log(Object.isFrozen(person))

//Keys,value,entries


// Abstract Objects
const emotion = {
    name: "Love",
    intensity: "High",
    express: function() {
        console.log("Feeling love!");
    }
};

// console.log(Object.keys(emotion))
// console.log(Object.values(emotion))

// console.log(Object.entries(emotion))

//
Object.entries(emotion).forEach(element => {
    console.log(element)

});
// how to check two objects are eqaul or not
let a = { name: 'Dionysia', age: 29, code: 99 };
let b = { name: 'Dionysia', age: 29 };
console.log(Object.is(a, b))