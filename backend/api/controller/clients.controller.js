const { clientsServices } = require("../services/clients.service");
const { projectService } = require("../services/projects.service");
const { mailer } = require("../utils/mailer");

const createClients = async (req, res) => {
  const { name, email, phone, comments } = req.body;

  if (!name || !email || !phone) {
    return res.sendStatus(421);
  }

  const newClients = await clientsServices.create(name, email, phone, comments);

  mailer.sendInfo(newClients).catch((error) => console.log(error));

  return res.send(newClients);
};



const clientsController = {
  createClients,
};

module.exports = {
  clientsController,
};
