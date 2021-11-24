require("dotenv").config();
const open = require("open");
/* MAIN Express */
const express = require("express");
const app = express();
var router = express.Router();
const path = require("path");
/* ROUTERS */
var PublicRoutes = require("./routes/public.routes");
var ConfiguratorApi = require("./routes/configurator.api.routes");

/* loggers and extras */
var logger = require("morgan");
var bodyParser = require("body-parser");
var exphbs = require("./lib/helpers");
var extras = require("./lib/extras");

app.use(logger(process.env.MORGANLEVEL));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* SWAGGER */
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

/* CORS */

/* Routes */
app.use(router);
app.use(PublicRoutes);
app.use("/api", ConfiguratorApi);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

process.env.PORT = process.env.PORT || 5000;
app.listen(process.env.PORT);
extras.VerbalHelper();

if (process.env.enviroment === "DEV") {
  // opens the url in the default browser
  open(`http://localhost:${process.env.PORT}/api-docs`);
}
