                        //EVERYTHING IN JS IS AN OBJECT 
        //(They are not exactly objects, they are inheriting properties from object)

// objA is inheriting from objB
//properties of objA will be 
// accessible in objB as well as methods

                                    //ARRAY
                                // ---------

let arr = [1,2];
console.log(arr);

let obj = {
    a:2
}
/* There is something known as prototype
whenever you create a object, JS engine automatically
attaches your object with hidden properties & methods,
these are methods you can access by just doing obj.;
 */

console.log(arr.__proto__);

// arr was inheriting properties from Array
console.log(Array.prototype);
//array is inheriting properties from object
console.log(arr.__proto__.__proto__);
console.log(obj.__proto__);

//---------------------------------------------------------------------------------------
                                      //FUNCTION
                                    // ---------

function abc(){
    console.log('hey');
}
console.log(abc.__proto__);

// abc was inheriting properties from Function
console.log(Function.prototype);
//function is inheriting properties from object
console.log(abc.__proto__.__proto__);
console.log(Object.prototype);

//prototype chaining
// obj.__proto__.__proto__ ==> null
// there is nothing above the object.

//-----------------------------------------------------------------------------------------

                           //Prototypical INHERITING FROM OTHER OBJECT

const a = {
    name : 'tanya',
    age : 22
}

const b = {
    firstName : 'ishika',
    city : 'delhi'
}
// by default b.__proto__ is pointing to Object
// b is inheriting from a by this >
b.__proto__ = a;
console.log(b.age);