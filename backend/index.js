const express = require("express");
const dotenv = require("dotenv");
const { allModels } = require("./api/models/models");
const { projectRouter } = require("./api/routes/projects.route");
const cors = require("cors");
const {
  fillingTableProjects,
} = require("./api/createDataPg/fillingTableProjects");
const { fetchAPIurl } = require("./api/utils/fetchAPI.img");
const { clientsRouter } = require("./api/routes/clients.route");
const { recruitsRouter } = require("./api/routes/recruits.route");

dotenv.config();

const app = express();
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server run on port ${process.env.SERVER_PORT}`);
});

app.on("error", (error) => {
  console.log(error);
});

app.use(cors());
app.use(express.json());

// Endpoint path
app.use("/projects", projectRouter);
app.use("/clients", clientsRouter);
app.use("/recruits", recruitsRouter);

// Init Table with .sync and fill
allModels
  .initTables()
  .then(async () => {
    // ***Turn on if you wanna fill a table projects***
    // fillingTableProjects("backend/public/architecture", "architecture");
    // fillingTableProjects(
    //   "backend/public/interior-design",
    //   "interior-design"
    // );
    // fillingTableProjects("backend/public/landscape", "landscape");
  })
  .catch((error) => {
    console.log(error);
  });
