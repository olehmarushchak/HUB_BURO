const express = require('express');
const { catchError } = require('../utils/catchError');
const { projectsController } = require('../controller/projects.controller');

const projectRouter = express.Router();

projectRouter.get('/:id', catchError(projectsController.getByProjectId));
projectRouter.get('/', catchError(projectsController.getAllProjects));
projectRouter.post('/', catchError(projectsController.createProject));

module.exports = {
  projectRouter,
};