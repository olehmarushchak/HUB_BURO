const { projectService } = require("../services/projects.service");
const { completeProjects } = require("./completeProjects");

async function fillingTableProjects(path, category) {
  const projects = await completeProjects(path, category);

  projects.forEach((project) => {
    const { title, category, mainimg, description, images } = project;

    projectService.create(title, category, mainimg, description, images);
  });
}

module.exports = {
  fillingTableProjects,
};
