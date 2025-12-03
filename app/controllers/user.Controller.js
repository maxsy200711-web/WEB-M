const user = require("../models/user.models.js");
exports.findAll = (req, res) => {
    user.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error fetch users"
            });
        else res.send(data);
    });
};