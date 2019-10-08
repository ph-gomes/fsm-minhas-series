const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const mongo = (process.env.MONGODB = "mongodb://localhost/minhas-series");

const pages = require("./routes/pages");
const series = require("./routes/series");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", pages);
app.use("/series", series);

mongoose
  .connect(mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(_ => {
    app.listen(port, () => console.log(`Listening on port: ${port}`));
  })
  .catch(e => console.log(e));
