const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const winston = require("winston");

const env = require("./env");
const error = require("./middleware/error");

const swaggerRoutes = require("./routes/swagger-routes");
const authRoutes = require("./routes/auth-routes");
const userRoutes = require("./routes/user-routes");
const courseRoutes = require("./routes/course-routes");
const statisticRoutes = require("./routes/statistic-routes");

const app = express();

require("./startup/config")();
require("./startup/db")();
require("./startup/logging")();
require("./startup/validation")();
require("./startup/cloudinary")();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", swaggerRoutes.routes);
app.use("/api", authRoutes.routes);
app.use("/api", userRoutes.routes);
app.use("/api", courseRoutes.routes);
app.use("/api", statisticRoutes.routes);

app.use(error);

app.listen(env.port, () => winston.info("App listening on url: " + env.url));
