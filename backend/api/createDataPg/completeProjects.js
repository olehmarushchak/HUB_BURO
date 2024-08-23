const { readFromDirectory } = require("../utils/readFromDirectory");
const { createProject } = require("./createNewProject");

async function completeProjects(directiryOfProject, category) {
  const projects = await readFromDirectory(directiryOfProject);
  const completedProjects = [];

  for (const file of projects) {
    const projectResult = await createProject(file, category);
    completedProjects.push(projectResult);
  }

  return completedProjects;
}

module.exports = {
  completeProjects,
};
