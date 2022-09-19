const myFunctions = require('./function');

test('return two', () => {
  expect(myFunctions.returnTwo()).toBe(2);
});

test('greeting test', () => {
  expect(myFunctions.greeting('James')).toBe('Hello, James');
  expect(myFunctions.greeting('Jill')).toBe('Hello, Jill');
});

test('add test', () => {
  expect(myFunctions.add(1, 2)).toBe(3);
  expect(myFunctions.add(5, 9)).toBe(14);
});
