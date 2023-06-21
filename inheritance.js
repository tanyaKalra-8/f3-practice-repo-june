/// BankAccount Constructor function
function BankAccount(customerName, balance=0){
    this.customerName=customerName;
    this.accountNo = Math.floor((Math.random() * 1000000) + 1);
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// const loveAccount = new BankAccount('love',500);
// console.log(loveAccount);
// inheritance hardcoded
/// CurrentAccount Constructor function
// function CurrentAccount(customerName, balance=0){
//     this.customerName=customerName;
//     this.accountNo = Math.floor((Math.random() * 1000000) + 1);
//     this.balance = balance;
//     this.transaction = 500000; // 5 lakhs
// }
// CurrentAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// CurrentAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// CurrentAccount.prototype.businessLoan = function (amount) {
//     console.log(`taking business loan: ${amount}`)
//   };

//   const pcAccount = new CurrentAccount('pc',500);
//   console.log(pcAccount);

// / SavingAccount Constructor function
function SavingAccount(customerName, balance=0) {
  BankAccount.call(this, customerName, balance);
  this.transaction = 100000; // 1 lakhs
}
SavingAccount.prototype = Object.create(BankAccount.prototype);

SavingAccount.prototype.personalLoan = function (amount) {
  console.log(`taking personalLoan: ${amount}`);
};
SavingAccount.prototype.constructor = function SavingAccount(
  customerName,
  balance = 0
) {
  BankAccount.call(this, customerName, (balance = 0));
  this.transaction = 100000; // 1 lakhs
};
const loveAccount = new SavingAccount("love", 5000);
console.log(loveAccount);

// function CurrentAccount(customerName, balance=0){
//   BankAccount.call(this,customerName,balance);
//   this.transaction = 500000; // 5 lakhs
// }
// CurrentAccount.prototype.deposit = function (amount) {
// this.balance += amount;
// };

// CurrentAccount.prototype.withdraw = function (amount) {
// this.balance -= amount;
// };

// CurrentAccount.prototype = Object.create(BankAccount.prototype);

// CurrentAccount.prototype.businessLoan = function (amount) {
//   console.log(`taking business loan: ${amount}`)
// };
// CurrentAccount.prototype.constructor = function CurrentAccount(customerName, balance=0){
//   BankAccount.call(this,customerName,balance);
//   this.transaction = 500000; // 5 lakhs
// }

// CurrentAccount.prototype is having all the hidden methods of CurrentAccount
// BankAccount.prototype is having all the hidden methods of BankAccount

// const pcAccount = new CurrentAccount('pc',500);
// console.log(pcAccount);

// {} -> constructor function of parent intity will first
// then -> our costructor function will run

// we are calling child constructor function
// child constructor is calling parent constructor function
// child fn defition is executed