// 1. นำเข้าโมเดล และใช้ชื่อตัวแปรเป็น Category (หรือ category) เพื่อให้สอดคล้องกัน
const Category = require("../models/category.model");

// Controller method to get all categories
exports.findAll = (req, res) => {
    // ใช้ Category แทน category ที่เคย undefined
    Category.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Error fetching category"
            });
        else res.send(data);
    });
};

// Controller method to create a new category (Note: The fields suggest Product data, 
// but we treat it as the data structure for category based on the model.)
exports.create = (req, res) => {
    // Validate request
    if (!req.body.pro_name || !req.body.price || !req.body.cat_id) {
        res.status(400).send({
            message: "Product name, price, and category ID cannot be empty!"
        });
        return;
    }

    // Create a new Category object
    // ใช้ constructor ที่ถูก export จาก Model (ซึ่งตอนนี้คือ Category)
    const newCategory = new Category({
        pro_name: req.body.pro_name,
        price: req.body.price,
        cat_id: req.body.cat_id
    });

    // เรียกเมธอด create โดยใช้ newCategory แทน newProduct/newcategory ที่ไม่ได้กำหนด
    Category.create(newCategory, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Some error occurred while creating the category."
            });
        } else {
            res.status(201).send(data);
        }
    });
};

// Controller method to update a category
exports.update = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Data to update cannot be empty!"
        });
        return;
    }

    // Update the category in the database
    Category.updateById(req.params.id, req.body, (error, data) => {
        if (error) {
            if (error.kind === "not_found") {
                res.status(404).send({
                    message: `Category with id ${req.params.id} not found.`
                });
            } else {
                res.status(500).send({
                    message: `Error updating category with id ${req.params.id}`
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Controller method to delete a category
exports.delete = (req, res) => {
    // Delete the category from the database
    Category.remove(req.params.id, (error, data) => {
        if (error) {
            if (error.kind === "not_found") {
                res.status(404).send({
                    message: `Category with id ${req.params.id} not found.`
                });
            } else {
                res.status(500).send({
                    message: `Could not delete category with id ${req.params.id}`
                });
            }
        } else {
            res.send({
                message: "Category was deleted successfully!"
            });
        }
    });
};