const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Recruits = sequelize.define(
  "Recruits",
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvlink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "recruits",
  }
);

module.exports = {
  Recruits,
};
