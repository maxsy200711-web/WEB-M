const auth = require('./authen.route'); // Add this line

module.exports = app => {
  const products = require ( "../controllers/product.controller" );
  
  // Add "auth" to the routes that you need
  app.get( "/products", auth, products.findAll );
  app.post( "/products", auth, products.create );
  app.put( "/products/:id", auth, products.update );
  app.delete( "/products/:id", auth, products.delete );
}