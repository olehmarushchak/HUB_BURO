const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Clients = sequelize.define(
  "Clients",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      defaultValue: "without comments",
    },
  },
  {
    tableName: "clients",
  }
);

module.exports = {
  Clients,
};
