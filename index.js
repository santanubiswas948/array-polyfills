(function(){
// Polyfill for map
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

// Polyfill for filter
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

})()
