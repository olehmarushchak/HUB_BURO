const { Projects } = require("../models/projects.model");

const create = async (title, category, mainimg, description, images) => {
  return Projects.create({ title, category, mainimg, description, images });
};

const getALL = async () => {
  return await Projects.findAll();
};

const getById = async (id) => {
  return await Projects.findAll({ where: { id } });
};

const remove = async (id) => {
  return await Projects.destroy({ where: { id } });
};

const projectService = {
  create,
  getALL,
  getById,
  remove,
};

module.exports = {
  projectService,
};
