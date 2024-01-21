// const sum = require('./sum')
const checkvalidinput = require('./sum')

const fetch = require('./sum')
    // test('adds 2 +3  equal to 5description', () => {
    //     expect(sum(2, 3)).toBe(5) //toBe IS MATCHER IS EXPECT THE VALUE IS MAENTIONS ONLY FOR PRIMITIVE VALUES
    // })
    // test('two plus two is four', () => {
    //     expect(2 + 4).toBe(6)
    // })
    // test('OBJECT assignment', () => {
    //     const data = { one: 1 };
    //     data['two'] = 2,
    //         data['three'] = 2

//     expect(data).toEqual({ one: 1, two: 2, three: 3 })
// })
// test('n is falsy vale', () => {
//     const n = ''
//     expect(n).toBeFalsy()
// })

// test('n is thruthy vale', () => {
//     const n = 1
//     expect(n).toBeTruthy()
// })

// test('throws  VALID INPUT', () => {
//     expect(() => {
//         checkvalidinput(9);
//     }).toThrow();
// })
test('the data is peanut  butter', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut butter');
            done();
        } catch (er) {
            done(er)
        }
    }
    fetch(callback)
})