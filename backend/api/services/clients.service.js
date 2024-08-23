const { Clients } = require("../models/clients.model");

const create = async (name, email, phone, comments) => {
  return await Clients.create({ name, email, phone, comments });
};

const clientsServices = {
  create,
};

module.exports = {
  clientsServices,
};
