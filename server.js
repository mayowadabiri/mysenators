const express = require("express");
const db = require("./db");
const getAll = require("./controllers/getAll");
const { searchByState, searchByName } = require("./controllers/search");
const add = require("./controllers/add");
const edit = require("./controllers/update");
const deleted = require("./controllers/delete");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});
db;
// app.use("/", (req, res, next) => {
//   res.send("Server up and running");
//   res.end();
// });

app.get("/senators/get", getAll);

app.get("/search/state/:id", searchByState);
app.get("/search/name/:id", searchByName);
app.post("/add", add);
app.put("/edit/:id", edit);
app.delete("/delete/:id", deleted);

app.listen(4000, () => {
  console.log("Sever listening on port 4000");
});
