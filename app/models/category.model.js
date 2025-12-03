const sql = require("./db"); // **ตรวจสอบเส้นทางไฟล์นี้ให้ถูกต้อง**

// constructor
// เราใช้ชื่อ constructor เป็นตัวพิมพ์ใหญ่ Category เพื่อให้สอดคล้องกับ Controller ที่เรียกใช้ 'new Category'
const Category = function (product) {
    this.pro_name = product.pro_name;
    this.price = product.price;
    this.cat_id = product.cat_id;
};

// Get all categories
Category.getAll = result => {
    sql.query("SELECT * FROM category", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }
        console.log("Category: ", res);
        result(null, res)
    });
};

// Create a new category
Category.create = (newCategory, result) => {
    // console.log(newProduct) // ลบบรรทัดนี้ออก เพราะ newProduct ไม่ได้กำหนดในไฟล์นี้
    sql.query("INSERT INTO category SET ?", newCategory, (error, response) => {
        if (error) {
            console.error(error);
            result(error, null);
            return;
        }
        result(null, { id: response.insertId, ...newCategory });
    });
};

// Update category by ID
Category.updateById = (id, updatedCategory, result) => {
    sql.query("UPDATE category SET ? WHERE id = ?", [updatedCategory, id], (error, response) => {
        if (error) {
            console.error(error);
            result(error, null);
            return;
        }

        if (response.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, { id: id, ...updatedCategory });
    });
};

// Delete category by ID
Category.remove = (id, result) => {
    sql.query("DELETE FROM category WHERE id = ?", id, (error, response) => {
        if (error) {
            console.error(error);
            result(error, null);
            return;
        }

        if (response.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        result(null, response);
    });
};

// 3. Export the Category object/constructor
module.exports = Category;