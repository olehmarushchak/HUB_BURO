const { Projects } = require("../models/projects.model");

const create = async (
  title,
  category,
  mainimg,
  description,
  images,
  location,
  tour,
  descriptionENG
) => {
  return Projects.create({
    title,
    category,
    mainimg,
    description,
    images,
    location,
    tour,
    descriptionENG,
  });
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

const update = async (id, updateObject) => {
  return await Projects.update(updateObject, { where: { id } });
};

const projectService = {
  create,
  getALL,
  getById,
  remove,
  update,
};

module.exports = {
  projectService,
};
