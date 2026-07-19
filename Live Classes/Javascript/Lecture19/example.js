// function user() {
//   let balance = 1000;

//   function credit(amount) {
//     if (typeof amount === "number") balance += amount;
//   }

//   function debit(amount) {
//     if (typeof amount === "number" && amount <= balance) balance -= amount;
//   }

//   function checkBalance() {
//     console.log(balance);
//   }

//   return {
//     credit,
//     debit,
//     checkBalance,
//   };
// }

// const user1 = user();
// user1.credit(200);
// user1.credit(300);
// user1.debit(100);
// user1.checkBalance();




function bank() {
  let balance = 2000;

  return {
    credit: function (amount) {
      if (typeof amount === "number") balance += amount;
    },

    debit: function (amount) {
      if (typeof amount === "number" && amount <= balance) balance -= amount;
    },

    checkBalance: function () {
      console.log(balance);
    },
  };
}

const user1 = bank();
user1.credit(500);
user1.debit(100);
user1.checkBalance();