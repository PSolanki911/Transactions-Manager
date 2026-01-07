const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/transactions")
.then(e => console.log("MongoDB Connected"))
.catch(error => console.log("error"));

app.use("/api/entries", require("./routes/routes"));

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

module.exports = app;