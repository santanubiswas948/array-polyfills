# array-polyfills
This is an array polyfills `.js` file to support few array methods (map, filter, forEach, reverse) which maybe doesn't support in old browsers or anyone can learn how to create custom array methods. 
## Prerequisites
The `index.js` which is inside `main` branch of this [repository](https://github.com/santanubiswas948/array-polyfills). People have to add this file before of any others js files or js codes of your application.
For example if anyone want to use in their application and if their root file of their application is `index.html`
## Supported Array methods
- ### Map
  This is same like array map method.
  This should work like below example:
```js
var arr = [1,2,3];
var newArr = arr.map((item) => item + 1);
console.log(newArr); // [2,3,4]
console.log(arr === newArr) // false
```
- ### Filter
  This is same like array filter method.
  This should work like below example:
```js
var arr = [1,2,3];
var newArr = arr.filter((item) => item > 1);
console.log(newArr); // [2,3]
console.log(arr === newArr) // false
```
- ### forEach
  This is same like array forEach method.
  This should work like below example:
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
  This should work like below example:
```js
var arr = [1,2,3];
var val = arr.reverse();
console.log(val) // [3,2,1]
console.log(val === arr) // true
```
