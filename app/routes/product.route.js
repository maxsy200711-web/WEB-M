module.exports = app => {
const products = require("../controllers/product.controller");
app.get("/products", products.findAll);
app.post("/products",products.create);
app.put("/products/:id",products.update);
app.delete("/products/:id",products.delete);

}