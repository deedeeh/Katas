export default class Account {
  constructor(deposit, withdraw) {
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.balance = 0;
  }

  printDeposit() {
    return this.balance += this.deposit
  }
}