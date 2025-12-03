const sql = require("./db.js");
//constructor
const user = function (user) {
    this.pro_name = user.pro_name;
    this.price = user.price;
    this.cat_id = user.cat_id;
};
//fetch all data
user.getAll = result => {
    sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }
        console.log("user: ", res);
        result(null, res)
    })
};

module.exports = user;