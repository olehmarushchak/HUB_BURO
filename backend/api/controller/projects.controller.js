const { projectService } = require("../services/projects.service");

const createProject = async (req, res) => {
  const {
    title,
    category,
    mainimg,
    description,
    images,
    tour,
    location,
    descriptionENG,
  } = req.body;

  if (
    !title ||
    !category ||
    !mainimg ||
    !description ||
    !images ||
    !location ||
    !descriptionENG ||
    typeof images !== "object"
  ) {
    return res.sendStatus(421);
  }

  const newProject = await projectService.create(
    title,
    category,
    mainimg,
    description,
    images,
    location,
    tour,
    descriptionENG
  );

  res.statusCode = 201;
  res.send(newProject);
};

const getAllProjects = async (req, res) => {
  const allProjects = await projectService.getALL();

  return res.json(allProjects);
};

const getByProjectId = async (req, res) => {
  const { id } = req.params;

  return res.send(await projectService.getById(id));
};

const removeProject = async (req, res) => {
  const { id } = req.params;

  await projectService.remove(id);

  res.send(200);
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);

  const updatedProject = await projectService.update(id, req.body);

  res.send(updatedProject);
};

const projectsController = {
  createProject,
  getAllProjects,
  getByProjectId,
  removeProject,
  updateProject,
};

module.exports = {
  projectsController,
};
