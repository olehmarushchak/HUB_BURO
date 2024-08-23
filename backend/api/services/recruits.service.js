const { Recruits } = require("../models/recruits.model");

const create = async (name, email, phone, comments, cvlink) => {
  return Recruits.create({name, email, phone, comments, cvlink});
};

const recruitsService = {
  create,
};

module.exports = {
  recruitsService,
};
