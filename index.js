(function(){
/* 
  1. Polyfill for Array map method
  var arr = [1,2,3];
  var newArr = arr.map((item) => item + 1);
  console.log(newArr); // [2,3,4]
  console.log(arr === newArr) // false
*/
if (!Array.prototype.map) {
    //callback(eachItem, index, array)   
    Array.prototype.map = function(callback) {
        var arr = [];
        try {
            for(var i = 0; i<this.length; i++) {
                arr.push(callback(this[i], i, this));
            }
        } catch(e){
            throw new Error(e);
        }
        return arr;
    }
}

/*
  2. Polyfill for Array filter method
  var arr = [1,2,3];
  var newArr = arr.filter((item) => item > 1);
  console.log(newArr); // [2,3]
  console.log(arr === newArr) // false
*/
    if (!Array.prototype.filter) {
        //callback(eachItem, index, array)       
        Array.prototype.filter = function (callback) {
            var arr = [];
            try {
                for(var i = 0; i<this.length; i++) {
                    if (callback(this[i], i, this)) {
                        arr.push(this[i]);
                    }
                }
            } catch(e){
                throw new Error(e);
            }
            return arr;
        }
    }
/*
  3. Ployfill for Array forEach method
  Polyfill for Array filter method
  var arr = [1,2,3];
  var val = arr.forEach((item) => console.log(item));
  console.log(val); // undefined
*/
    if (!Array.prototype.forEach) {
        //callback(eachItem, index, array)
        Array.prototype.forEach = function (callback) {
            try {
                for (var i = 0; i< this.length; i++) {
                    callback(this[i], i, this);
                }
            } catch(e){
                throw new Error(e);
            }
        }
    }
 /*
  4. Polyfill for Array reverse method
  var arr = [1,2,3];
  var val = arr.reverse();
  console.log(val) // [3,2,1]
  console.log(val === arr) // true
*/
    if (!Array.prototype.reverse){
        Array.prototype.reverse = function(){
          var arr = [];
          try {
            for(var i = this.length - 1; i>=0 ; i--){
             arr.push(this[i]);
            }
          } catch(e) {
            throw new Error(e);
          }
          return arr;
        }
    }
/*
  5. Polyfill for Array reduce method
*/
   if (!Array.prototype.reduce){
    //callback(prevVal, eachItem, index, array)
    Array.prototype.reduce = function(callback, prevVal){
     try{
      for(var i = 0; i<this.length; i++){
        prevVal = callback(prevVal, this[i], i, this);
      }
      return prevVal;
    } catch(e){
      throw new Error(e);
    }
  }

})()
