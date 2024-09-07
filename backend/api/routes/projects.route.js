const express = require('express');
const { catchError } = require('../utils/catchError');
const { projectsController } = require('../controller/projects.controller');

const projectRouter = express.Router();

projectRouter.delete('/:id', catchError(projectsController.removeProject));
projectRouter.get('/:id', catchError(projectsController.getByProjectId));
projectRouter.get('/', catchError(projectsController.getAllProjects));
projectRouter.post('/', catchError(projectsController.createProject));
projectRouter.patch('/:id', catchError(projectsController.updateProject));

module.exports = {
  projectRouter,
};