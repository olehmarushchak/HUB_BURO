const { recruitsService } = require("../services/recruits.service");
const { mailer } = require("../utils/mailer");

const createNewRecruit = async (req, res) => {
  const { name, email, phone, comments, cvlink } = req.body;
  console.log(req.body);

  if (!name || !email || !phone || !comments || !cvlink) {
    return res.sendStatus(421);
  }

  const newRecruit = await recruitsService.create(
    name,
    email,
    phone,
    comments,
    cvlink
  );

  mailer.sendInfoAboutRecruit(newRecruit);

  res.send(newRecruit);
};

const recruitsController = {
  createNewRecruit,
};

module.exports = {
  recruitsController,
};
