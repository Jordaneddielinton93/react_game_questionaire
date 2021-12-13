// const {
//   introduction,
//   addUniqueItemToList,
//   checkIfInputIsString,
//   add,
//   checkStr,
//   User,
// } = require('./index');
// test('Introduction function should return a string - hi my name is + value passed in', () => {
//   const name = 'Hamza';
//   const expected = 'Hi my name is Hamza';
//   const actual = introduction(name);
//   expect(actual).toBe(expected);
// });
// describe('checkIfInputIsString function', () => {
//   test('It passes when input is string', () => {
//     const input = 'Hello';
//     const expected = true;
//     const actual = checkIfInputIsString(input);
//     expect(actual).toBe(expected);
//   });
//   test('It throws an error when input is not a string', () => {
//     const input = false;
//     const expected = `Input was not a string`;
//     expect(() => checkIfInputIsString(input)).toThrowError(expected);
//   });
// });
// describe('addUniqueItemToList function', () => {
//   test('If item does not exist in list, item should be added to list', () => {
//     const list = ['milk', 'chocolate'];
//     const item = 'snicker';
//     const expected = ['milk', 'chocolate', 'snicker'];
//     const actual = addUniqueItemToList(list, item);
//     expect(expected).toEqual(expect.arrayContaining(actual));
//   });
//   test('If item already exists in list, it should not be added', () => {
//     const list = ['bread', 'juice', 'milk', 'chicken'];
//     const item = 'bread';
//     const actual = addUniqueItemToList(list, item);
//     expect(list).toEqual(actual);
//   });
// });
// it('The function add should add both numbers and return the sum', () => {
//   let expected = 3;
//   let actual = add(2, 1);
//   console.log('actual', actual);
//   expect(expected).toBe(actual);
// });
// it('The function checkStr should return true | false depending on matcher', () => {
//   let expected = true;
//   let actual = checkStr('hello bro');
//   console.log('actual', actual);
//   expect(expected).toBe(actual);
// });
// /** Testing Class */
// // Test Suite
// describe(`${User.name} Class`, () => {
//   let model;
//   beforeEach(() => {
//     model = new User({
//       firstName: 'Hamza',
//       middleName: '',
//       lastName: 'Ibrahim',
//     });
//   });
//   it('first name defaults to empty', () => {
//     // arrange
//     const data = { firstName: null };
//     // assert
//     expect(model.firstName).toBe('Hamza');
//   });
//   it('last name defaults to empty', () => {
//     // arrange
//     const data = { lastName: null };
//     // assert
//     expect(model.lastName).toBe('Ibrahim');
//   });
//   it('middle name defaults to empty', () => {
//     // arrange
//     const data = { middleName: null };
//     // assert
//     expect(model.middleName).toBe('');
//   });
// });


// // ---

// const introduction = (name) => 'Hi my name is ' + name;
// const addUniqueItemToList = (list, item) => {
//   if (list.includes(item)) {
//     return list;
//   }
//   return [...list, item];
// };
// const checkIfInputIsString = (string) => {
//   if (typeof string === 'string') {
//     return true;
//   }
//   throw new Error(`Input was not a string`);
// };
// const add = (a, b) => a + b;
// const checkStr = (str) => {
//   const reg = /^Hello/gi;
//   return reg.test(str);
// };
// class User {
//   firstName;
//   lastName;
//   middleName;
//   constructor(data = {}) {
//     this.firstName = data.firstName || '';
//     this.lastName = data.lastName || '';
//     this.middleName = data.middleName || '';
//   }
// }
// module.exports = {
//   introduction,
//   addUniqueItemToList,
//   checkIfInputIsString,
//   add,
//   checkStr,
//   User,
// };