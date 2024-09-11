const { nameByPath } = require("../utils/nameByPath");
const fs = require("fs/promises");
const { readFromDirectory } = require("../utils/readFromDirectory");
const { fetchAPIurl } = require("../utils/fetchAPI.img");
const { convertDocxToText } = require("../utils/decoderDOCX");

async function createProject(file, category) {
  const newProject = {
    title: "",
    category: category,
    mainimg: "",
    description: "",
    images: [],
  };

  try {
    newProject.title = nameByPath(file);

    const project = await readFromDirectory(file);

    newProject.mainimg = await fetchAPIurl(
      project.find((file) => file.includes("main-view")),
      3,
      file
    );

    const descriptionFromProject = project.find((file) =>
      file.includes("description")
    );

    newProject.description = await convertDocxToText(descriptionFromProject);

    const projectImages = project.filter(
      (file) => file.includes("jpg") && !file.includes("main-view")
    );

    const imgUrl = [];

    for (const img of projectImages) {
      const url = await fetchAPIurl(img);

      imgUrl.push(url);
    }

    newProject.images = imgUrl;

    return newProject;
  } catch (error) {
    return error;
  }
}

module.exports = {
  createProject,
};
