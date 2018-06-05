const express = require("express");
const app = express();

// app.use(express.static("static"))
app.use(express.static("Module"))

app.listen(3000);