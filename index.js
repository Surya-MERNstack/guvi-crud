const express = require("express");
const mongose = require("mongoose");

const dburl = "mongodb://0.0.0.0:27017/DemoStudent";

mongose.connect(dburl, { useNewUrlParser: true });

const con = mongose.connection;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
try {
  con.on("open", () => {
    console.log("mongose is connected");
  });
} catch (err) {
  console.log(ReferenceError, err);
}

const studentRouter = require("./router/students");
app.use("/students", studentRouter);

app.listen(3020, () => {
  console.log("Server is running port 3020!!");
});
