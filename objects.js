//                             OBJECTS       

// var a=5;
// function what () { 
//     this.a = 100;
//     // hello = () => {
//     //     var a = 90
//     //     console.log(this.a)
//     // }
//     function hello() {
//         var a = 50
//         console.log(this.a)
//     }
//     hello();
// }
// what()

// --------------------------------------------------------------------------------------

// let user = {
//     name : "tanya",
//     age : 22,
//     hello () {
//         function abc () {
//             console.log(this)
//         }
//         console.log(this)
//         abc();
//     }

// --------------------------------------------------------------------------------------
    
// }
// user.hello();

// let word = "tanya"

// let str = `hello ${word}`
// console.log(str)

// --------------------------------------------------------------------------------------

// const keyyy = "firstName";
// const value = "tanya";

// const obj = {
//     [keyyy] : value,
//     keyyy : value
// }

// console.log(obj)

// for(key in obj){
//     console.log(key);
//     //we cannot use (.) notation here
//     // console.log(obj.key);
//     console.log(obj[key]);
// }

// --------------------------------------------------------------------------------------

// const user = {
//     name : "tanya",
//     age : 22
// }

// const mergerUsingSpreadOprator = {
//     isPerson : true,
//     ...user
// }

// console.log(mergerUsingSpreadOprator);

// --------------------------------------------------------------------------------------

// const obj = {
//     name : "tanya",
//     age : 22,
//     isWorking : true
// }
// // const name = obj.name;
// // const age = obj.age;
// // const isWorking = obj.isWorking;

// // to make it simple we can extract values like this
// const {name, age, isWorking} = obj;

// console.log(name, age, isWorking);

// --------------------------------------------------------------------------------------

// Shallow and deep copy

// let obj = {
//     x : 10
// }

// // Deep copy => new space in memory
// let b = {...obj};

// // shallow copy => copy by Reference
// let a = obj;

// obj.x = 5;
// console.log(a);
// console.log(b);

// --------------------------------------------------------------------------------------
//                             COPY USING SPREAD OPERATOR

// const h = "hello!"

// const b = h;
// const g = {...h};
// console.log(g);
// console.log(h===g);
// console.log(b);
// console.log(h===b);

// ---------------------------------
                    
// Deep copy is done only till first level
// Deep copying using spread operator will not
// work in nested objects

// because internal obj is present the outer obj will get Deep copied
// const a = {
//     x : 1,
//     y : 2,

//     // this z object will get Shallow copied
//     z : {
//         a : 10,
//         b : 40
//     }
// }

// const j = {...a}
// a.x=300
// a.z.b = 800
// console.log(j);
// console.log(a);

// Note :- That's why we don't use this method for deep copying the object

// --------------------------------------------------------------------------------------
// COPY USING JSON.stringify and JSON.parse

// const a = {
//     x : 1,
//     y : 2,
//     z : {
//         a : 10,
//         b : 40
//     }
// }

// const p = JSON.stringify(a);
// // now this object is deep copy of p on every level
// const j = JSON.parse(p);
// a.x=300
// a.z.b = 800
// console.log(j);
// console.log(a);

// -------------------------------------------------------------------------------------- //