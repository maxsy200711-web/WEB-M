module.exports = app => {
const user = require("../controllers/user.Controller.js");
app.get("/users", user.findAll);
}