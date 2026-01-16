module.exports = app => {
  const user = require ( "../controllers/user.Controller" );
  
  app.post( "/user", user.create );
  app.post( "/user/login", user.login );
}
