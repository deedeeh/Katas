class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.deposit = 0;
    this.withdraw = 0;
    this.date = new Date();
  }

  addDeposit(deposit) {
    this.deposit = deposit 
    return deposit >= 10 ? this.balance += deposit : `Sorry ${this.name} the minimum deposit amount is £10!`
  }

  withdrawMoney(withdraw) {
    this.withdraw = withdraw
    return withdraw <= this.balance ? this.balance -= withdraw : `Sorry ${this.name} you don\'t have enough balance to withdraw the requested amount!` 
  }

  getBalance() {
    return this.balance
  }

 }

 const account01 = new Account('Sara')
 console.log(account01.addDeposit(60));
 console.log(account01.addDeposit(100));
