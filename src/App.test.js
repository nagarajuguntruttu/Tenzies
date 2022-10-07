let animals = ['rabbit', 'tiger','lion','Monkey'];

test('check animals',() => {
  animals.push('Mamba');
  expect(animals[animals.length-1]).toBe('Mamba');
});


test('check animals',() => {
  animals.unshift('Asha');
  expect(animals[0]).toBe('Asha');
});







// const sum = require('./App');
// const fetchData = require('./async')

// test('checking async',()=> {
//   fetchData(1).then((todo) => {
//     expect(todo.id).toBe(1);
//   })
// })



// test('sum of 2 + 2',() => {
//   const result = sum(2,2);
//   expect(result).toBe(4)
// });

// test("checking of object", () => {
//   const obj = {};
//   expect(obj).toEqual({});
// });


// test("checking arrays", () => {
//   const array = ['Raju', 'Asha', 'Pavan', 'Anand'];
//   expect(array).toContain('Asha');
// })

