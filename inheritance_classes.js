class BankAccount{
    name;
    accountNumber;
    balance=0;
    constructor(customerName,balance){
        this.name=customerName;
        this.accountNumber=Math.floor((Math.random() * 1000000) + 1);
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
}
class SavingAccount extends BankAccount{
    transactionLimit=5000;
    constructor(customerName,balance){
        super(customerName,balance);
    }
    personalLoan(){
        console.log('you are given personal loan');
    }
}

const pc = new SavingAccount('pc',500);

console.log(pc);

// CALL BIND APPLY still left
// Objects(shallow and deep is part of objects) // this is used dev
// polyfills
// map reduce filer and polyfills // this is used dev
// spreading and destructing // this is used dev
// Closure
