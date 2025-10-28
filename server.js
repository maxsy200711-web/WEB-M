const express = require("express");
const apiRouter = require("./routes/apiRoutes");

const app = express();
const port = 3000;

app.use("/", apiRouter);

app.listen(port, () => {
    console.log(`Lao-Top API running at http://localhost:${port}`);
});
