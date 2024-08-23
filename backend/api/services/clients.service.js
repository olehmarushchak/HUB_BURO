const { Clients } = require("../models/clients.model");

const create = (name, email, phone, comments) => {
  return Clients.create({ name, email, phone, comments });
};

const clientsServices = {
  create,
};

module.exports = {
  clientsServices,
};
