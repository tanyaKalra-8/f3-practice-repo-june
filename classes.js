// Class syntax is a syntatic sugar
// for constructor function, Under the hood same
// constructor function is made.

//any method written inside a class will automatically be stored in prototype
class BankAccount {
    name;
    accountNumber;
    #balance = 0;
    #test = 0;
    constructor(customerName, balance) {
      this.name = customerName;
      this.accountNumber = Math.floor(Math.random() * 1000000 + 1);
      this.#balance = balance;
    }
    // setters and getters to manipulate private properties
    // deposit(amount){
    //     // if (pin !== 1234) console.log('wrong pin'); // if cash is fake or note
    //     this.#balance+=amount;
    // }
    // private method for checking currency authte
    // normal using as setter
    setBalance(amount, pin) {
      if (pin !== 3489) return;
      this.#balance = amount;
    }
    // getBalance(){
    //     return this.#balance;
    // }
    // this is proper setter
    set balance(amount){
        this.#balance = amount;
    }
    // this is proper getter
    get balance() {
      return this.#balance;
    }
  //     set test(amount){
  //       this.#balance = amount;
  //   }
  }
  
  const pcAccount = new BankAccount('pc',500);
  pcAccount.test = 10000;
  console.log(pcAccount);
  // console.log(pcAccount.balance);