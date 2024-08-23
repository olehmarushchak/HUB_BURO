const express = require("express");
const { catchError } = require("../utils/catchError");
const { recruitsController } = require("../controller/recruits.controller");

const recruitsRouter = express.Router();

recruitsRouter.post("/", catchError(recruitsController.createNewRecruit));

module.exports = {
  recruitsRouter,
};
