const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests dof ccontent-type; applicattion/json
app.use(bodyParser.json());

// parse reuests of content-type; application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome to bezkoder application."});
});
require("./app/routes/user.route")(app);
require("./app/routes/product.route")(app);
//set port, listen for requests
app.listen(3000,() => {
    console.log("server is running on prot 3000.");
});