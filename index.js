(function(){
/* 
  Polyfill for Array map method
  var arr = [1,2,3];
  var newArr = arr.map((item) => item + 1);
  console.log(newArr); // [2,3,4]
  console.log(arr === newArr) // false
*/
if (!Array.prototype.map) {
    Array.prototype.map = function(callback) {
        var arr = [];
        try {
            for(var i = 0; i<this.length; i++) {
                arr.push(callback(this[i]));
            }
        } catch(e){
            throw new Error(e);
        }
        return arr;
    }
}

/*
  Polyfill for Array filter method
  var arr = [1,2,3];
  var newArr = arr.filter((item) => item > 1);
  console.log(newArr); // [2,3]
  console.log(arr === newArr) // false
*/
    if (!Array.prototype.filter) {
        Array.prototype.filter = function (callback) {
            var arr = [];
            try {
                for(var i = 0; i<this.length; i++) {
                    if (callback(this[i])) {
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
  Ployfill for Array forEach method
  Polyfill for Array filter method
  var arr = [1,2,3];
  var val = arr.forEach((item) => console.log(item));
  console.log(val); // undefined
*/
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback) {
            try {
                for (var i = 0; i< this.length; i++) {
                    callback(this[i]);
                }
            } catch(e){
                throw new Error(e);
            }
        }
    }
 /*
  Polyfill for Array reverse method
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

})()
