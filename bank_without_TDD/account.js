class Account {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.transactions = [];
    this.date = new Date();
  }

  addDeposit(deposit) {
    if(deposit >= 10) {
      const newBalance = this.balance + deposit
      this.transactions.push({date: this.date.toLocaleString(), type: 'deposit', value: deposit, balance: newBalance})
      this.balance = newBalance
      return
    } else {
     return `Sorry ${this.name} the minimum deposit amount is £10!`
    }
  }

  withdrawMoney(withdraw) {
    if(withdraw <= this.balance) {
      const newBalance = this.balance - withdraw
      this.transactions.push({date: this.date.toLocaleString(), type: 'withdraw', value: withdraw, balance: newBalance})
      this.balance = newBalance
      return
    } else {
     return `Sorry ${this.name} you don\'t have enough balance to withdraw the requested amount!`
    }
  }

  getBalance() {
    return this.balance
  }

  generateStatement(){
    return this.transactions.map(tx => `${tx.date} ||        ${tx.type === 'withdraw' ? `-${tx.value}` : tx.value}          ||          ${tx.balance}\n`).join('')
  }

  printStatement() {
    return `      Date          ||      Amount          ||       Balance
${this.generateStatement()}
`
  }

 }

 const account01 = new Account('Sara')
 console.log(account01.addDeposit(60));
 console.log(account01.addDeposit(100));
 console.log(account01.withdrawMoney(100));
 console.log(account01.printStatement());
