/* You are building a bank statement summary.
Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 */

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
const credit=transactions.filter(ele=>ele.type==="credit")
console.log(credit)
const amount=transactions.map(ele=>ele.amount)
console.log(amount)
const balance=transactions.reduce((acc, ele) =>acc+ele.amount,0 )
console.log(balance)
const debit=transactions.find(ele=>ele.type==="debit")
console.log(debit)
const am=transactions.findIndex(ele=>ele.amount===10000)
console.log(am)
