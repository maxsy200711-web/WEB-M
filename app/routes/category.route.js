module.exports = app => {
    // ใช้ const category แทน const Category เพราะนี่คือตัว Controller
    const category = require("../controllers/category.controller");
    
    // กำหนดเส้นทาง (Routes)
    app.get("/category", category.findAll);
    app.post("/category", category.create);
    app.put("/category/:id", category.update);
    app.delete("/category/:id", category.delete);
};