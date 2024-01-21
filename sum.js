// // function sum(a, b) {
// //     return a + b
// // }


// // module.exports = sum

// function checkvalidinput(inp) {
//     if (typeof inp !== 'number') {
//         throw new Error('Invalid Input')
//     } else {
//         throw new Error('valid Input')


//     }
// }
// module.exports = checkvalidinput
function FETCHdATA(callback) {
    setTimeout(() => {
        callback('peanut butter')
    }, 1000);
}

module.exports = FETCHdATA