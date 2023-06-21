// let obj = {
//     fn(){
// // do something
//     }
// }

// function abc(x,y,z){
    // do something
// }

// obj.fn = abc;

//----------------------------------------------------------------------------------------
                                    // CALL Polyfills

// Function.prototype.myCall=function(obj,...args){ // rest operator

//rest operators basically combines - combining the given arguments in an array

//     // args=[1,2,3,4];
//     obj.fn = this; // function definition has been stored
//     return obj.fn(...args); // spread operator

// spread operator basically - spreads the Array;

//     // obj.fn(1,2,3,4)
// }
// let obj = {
//     nam: 'tanya',
// };
// function sayHello(age, company){
//     return "Hello " + this.nam + " is " + age + " " + company;
// }

// console.log(sayHello.myCall(obj,23,'walmart'));

// abc.myCall

// // rest operator
// function abc(...args){
//     args=[1,2,3,4,5,'hello'];
// }

// abc(1,2,3,4,5,'hello');
// function abc(b,...args){
//     console.log(args);
//     return true;
// }

// 1,2,3,4

//------------------------------------------------------------------------------------------
                                    // APPLY Polyfill

// Function.prototype.myApply = function(obj,args){
//     //storing the value of given function in obj 
//     obj.fn = this;
//     // console.log(this);
//     //calling the method as we want the output with the given arguments
//     return obj.fn(...args);
//     // console.log(obj.fn(...args));
// }

// let obj = {
//     name: 'tanya',
// };

// function sayHello(age, company){
//     return "Hello " + this.name + " is " + age + " " + company;
// }

// console.log(sayHello.myApply(obj,[23,'walmart']));

//----------------------------------------------------------------------------------------
                                    //BIND Polyfill

Function.prototype.BindPolyfill = function(obj,...args){
    obj.fn=this; // we are still storing
    return function(...newArgs){
        return obj.fn(...args,...newArgs);
    }
}

let obj = {
    name: 'tanya',
};

function sayHello(age, company){
    return 'Hello '+ this.name + ' is ' + age + ' ' +company;
}

const hell=sayHello.BindPolyfill(obj,42);  // obj,...args
// console.log(hell);
console.log(hell(23,'walmart'));