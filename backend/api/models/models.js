const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");
const { Clients } = require("./clients.model");
// const { Projects } = require("./projects.model");
const { Recruits } = require("./recruits.model");

// const addColumn = async () => {
//   await sequelize.getQueryInterface().addColumn("projects", "descriptionENG", {
//     type: DataTypes.STRING,
//     allowNull: true,
//   });

//   await sequelize.getQueryInterface().addColumn("projects", "tour", {
//     type: DataTypes.STRING,
//     allowNull: true,
//   });

//   await sequelize.getQueryInterface().addColumn("projects", "location", {
//     type: DataTypes.STRING,
//     allowNull: true,
//   });
// };

const initTables = async () => {
  await Clients.sync({ force: true });
  await Recruits.sync({ force: true });

  // addColumn()
  //   .then(() => {
  //     console.log("Column added successfully.");
  //   })
  //   .catch((error) => {
  //     console.error("Error adding column:", error);
  //   });
};

const allModels = {
  initTables,
};

module.exports = {
  allModels,
};
