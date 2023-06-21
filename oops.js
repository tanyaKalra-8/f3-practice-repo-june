// OOP - Object ariented programming 
// - the programming which is oriented towards objects

//others ways of programming - functional

// how oops is better than functional programming ??
//Because oops is flexible & modular

//We hide complex things inside class
//and the properties which are important
//to interact with class are exposed

//We can create objects using constructor functions without using classes
//Constructor function
function bankacc(customerName, balance=0){
    this.customerName = customerName;
    this.balance = balance;
    //returns the current timestamp as the number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time). This timestamp represents the current system time.
    // this.accNumber = Date.now();
    this.accNumber = Math.floor(Math.random() * 10000000000000) + 1;

    //problem with these funvtion is it is specific to the object but it should be general
    //also it is taking extra space in object 
    // this.deposit = function(amount){
    //     this.balance += amount;
    // }
    // this.withdraw = function(amount){
    //     this.balance -=amount;
    // }
}


//for self use prototype
//for accessing parent prototype - use __proto__
bankacc.prototype.deposit = function(amount){
    this.balance += amount;
}

bankacc.prototype.withdraw = function(amount){
    this.balance -=amount;
}

//this is a fresh object
let accountA = new bankacc('tanya', 500);

console.log(accountA);

accountA.deposit(500);
console.log(accountA);

accountA.withdraw(200);
console.log(accountA);