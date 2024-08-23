const express = require("express");
const { catchError } = require("../utils/catchError");
const { clientsController } = require("../controller/clients.controller");

const clientsRouter = express.Router();

clientsRouter.post("/", catchError(clientsController.createClients));

module.exports = {
  clientsRouter,
};
