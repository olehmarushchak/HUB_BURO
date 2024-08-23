const { Clients } = require("./clients.model");
const { Projects } = require("./projects.model");
const { Recruits } = require("./recruits.model");

const initTables = async () => {
  await Projects.sync({ force: true });
  await Clients.sync({ force: true });
  await Recruits.sync({ force: true });
};

const allModels = {
  initTables,
};

module.exports = {
  allModels,
};
