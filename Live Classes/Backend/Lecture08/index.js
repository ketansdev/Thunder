import express from "express";
import fs, { read, readFileSync } from "fs";

const app = express();

app.use(express.json());

const DBPath = "./database.txt";

function readDB() {
  const data = fs.readFileSync(
    DBPath,
    "utf-8",
  ); /* whole database data is available to you in string format */
  return JSON.parse(data); /* converting string into Javascript object */
}

function writeDB(data) {
  // data is array of objects
  // convert it into JSON : string
  fs.writeFileSync(DBPath, JSON.stringify(data, null, 2));
}

//  Home page

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

//fetch customer detail using account number

app.get("/users/:accountNumber", (req, res) => {
  const accountID = Number(req.params.accountNumber);
  const data = readDB();
  const user = data.find((item) => item.accountNumber === accountID);

  res.json(user);
});

//  account creation

app.post("/users", (req, res) => {
  const user = req.body;

  const data = readDB();
  data.push(user);

  writeDB(data);
  res.json(data);
});

// delete user data

app.delete("/users", (req, res) => {
  const accountID = Number(req.body.accountNumber);

  const data = readDB();
  const newAccount = data.filter((item) => item.accountNumber !== accountID);
  writeDB(newAccount);

  res.send("Information deleted successfully");
});

//  balance update

app.patch("/users", (req, res) => {
  const balanceUpdate = req.body.balance;
  const accountId = Number(req.body.accountNumber);

  const data = readDB();
  const user = data.find((item)=> item.accountNumber === accountId);
    user.balance += balanceUpdate;

    writeDB(data);
    res.send("Balance updated successfully");

});

app.listen(3000, () => {
  console.log("Server started at port 3000");
});
