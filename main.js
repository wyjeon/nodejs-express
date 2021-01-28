var express = require("express");
var app = express();
var port = 3000;

//routing
app.get("/", function (req, res) {
  return res.send("/");
});

app.get("/page", function (req, res) {
  return res.send("/page");
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
