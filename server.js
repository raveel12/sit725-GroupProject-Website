var express = require("express");
require("dotenv").config();

var app = express();
var port = process.env.PORT || 3000;

const listingsRouter = require("./routes/listings");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Added ren html to routes and controller files
// app.get("/", (req, res) => {
//   res.redirect("home.html");
// });

app.use("/api/listings", listingsRouter);
app.listen(port, () => {
  console.log("App listening to: " + port);
});
