// POLYFILLS - Making our own methods in parent object
//Polyfill is a piece of code used to provide modern functionality on
//older browsers that do not natively support it.
// (if by default this method is not present in clients browser we made our own functions)

//map polyfill, filter polyfill, reduce polyfill
//call polyfill, apply polyfill, bind polyfill

//Any method of arr -> coming from Array.prototype

                                        //MAP Polyfill
const nums = [1,2,3,4];

//custom method
Array.prototype.myMap = function(callback) {
    let temp = [];
    //length -> ?? we don't know
    for(let i = 0; i< this.length; i++){
        temp.push(callback(this[i], i, this));
    }
    return temp;
}

let a = nums.myMap((value, index, arr)=> {
    return value;
})
console.log(a);

//------------------------------------------------------------------------------------------
                                    //FILTER Polyfill
                                         
const nums1 = [1,2,3,4];

//custom method
Array.prototype.myFilter = function(callback) {
let temp = [];
//length -> ?? we don't know
for(let i = 0; i< this.length; i++){
  if(callback(this[i], i, this)){
        temp.push(this[i]);
  }
}
return temp;
}

let b = nums1.myFilter((value, index, arr)=> {
        return value>2;
})
console.log(b);

//--------------------------------------------------------------------------------------
                                 //REDUCE Polyfill

const nums2 = [0,1,2,3,4];

//custom method
Array.prototype.myReduce = function(callback, initialValue) {
//initialValue = value given by user || undefined
var accumulator = initialValue;
for(let i=0;i< this.length; i++){
    accumulator = accumulator!==undefined ? callback(accumulator, this[i], i) : this[i];
    }
return accumulator;
}

let c = nums2.myReduce((sum, value, index)=> {
    return sum + value;
})
let d = nums2.myReduce((sum, value, index)=> {
        return sum + value;
},1000)
console.log(c);
console.log(d);

//------------------------------------------------------------------------------------------
                                    //FLAT Polyfill

arr4 = [1,2,3,[4,[5]],[6,7]];

//by default the depth is 1
// console.log(arr4.flat(2));

//LETS CREATE FLAT FUNCTION ON OUR OWN

Array.prototype.customFlat = function(depth=1){
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(Array.isArray(this[i]) & depth>0){
            result.push(...this[i].customFlat(this[i], depth-1));
        } else{
            result.push(this[i]);
        }
    };
    return result;
}

console.log(arr4.customFlat(1));

//------------------------------------------------------------------------------------------