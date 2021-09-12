# array-polyfills

- This is a polyfills `.js` file to support few array methods (map, filter, forEach, reverse) which maybe doesn't support in old browsers or anyone can learn how to create custom array methods. 
## Prerequisites
- this `index.js` file have to add before of any js files of application. 
## Supported Array methods
- ### Map
  This is same like array map method.
  this should work like below example:
```js
var arr = [1,2,3];
var newArr = arr.map((item) => item + 1);
console.log(newArr); // [2,3,4]
console.log(arr === newArr) // false
```
- ### Filter
  This is same like array filter method.
  this should work like below example:
```js
var arr = [1,2,3];
var newArr = arr.filter((item) => item > 1);
console.log(newArr); // [2,3]
console.log(arr === newArr) // false
```
- ### forEach
  This is same like array forEach method.
  this should work like below example:
```js
var arr = [1,2,3];
var val = arr.forEach((item) => console.log(item));
// 1 
// 2
// 3
console.log(val); // undefined
```
- ### reverse
  This is same like array reverse method.
  this should work like below example:
```js
var arr = [1,2,3];
var val = arr.reverse();
console.log(val) // [3,2,1]
console.log(val === arr) // true
```
