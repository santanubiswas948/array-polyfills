# array-polyfills
## What is Polyfills?
Javascript polyfills are the javascript codes which are written to support unsupported javascript features.
## what is array-polyfills?
This is javascript codes which are written to support few array methods(example: map, filter, forEach, reverse etc.) for those browsers which doesn't support these methods. Along with that anyone can learn how to create polyfill or custom array methods.
## Prerequisites
All array polyfills are written in `index.js` file of `main` branch of this [repository](https://github.com/santanubiswas948/array-polyfills).
Anyone have to add this file before of any js files or js codes of your application.
For example if anyone want to use in their application and if their root file of their application is `index.html`
## Code of Array map polyfil
```js
  if (!Array.prototype.map) {
    Array.prototype.map = function(callback){
      var arr = [];
      try {
        for(var i = 0; i<this.length; i++) {
          arr.push(callback(this[i]));
        }
      }catch(e){
        throw new Error(e);
      }
      return arr;
    }
  }
  var arr = [1,2,3];
  var newArr = arr.map((item) => item + 1);
  console.log(newArr); // [2,3,4]
```
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
- ### reverse
  This is same like array reverse method.
  This should work like below example:
```js
var arr = [1,2,3];
var val = arr.reverse();
console.log(val) // [3,2,1]
console.log(val === arr) // true
```
