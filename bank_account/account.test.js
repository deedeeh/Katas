import Account from './account';
jest.mock('./account');

beforeEach(() => {
  Account.mockClear();
});

it('We can check if a new account was created', () => {
  expect(Account).not.toHaveBeenCalled()

  const account = new Account(10, 0)
  expect(Account).toHaveBeenCalledTimes(1)
  account.printDeposit();
})

