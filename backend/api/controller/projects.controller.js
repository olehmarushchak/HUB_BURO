const { projectService } = require("../services/projects.service");

const createProject = async (req, res) => {
  const { title, category, mainimg, description, images } = req.body;

  if (
    !title ||
    !category ||
    !mainimg ||
    !description ||
    !images ||
    typeof images !== "object"
  ) {
    return res.sendStatus(421);
  }

  const newProject = await projectService.create(
    title,
    category,
    mainimg,
    description,
    images
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

const projectsController = {
  createProject,
  getAllProjects,
  getByProjectId,
};

module.exports = {
  projectsController,
};
