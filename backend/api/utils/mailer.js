const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "westernpc22@gmail.com",
    pass: "igaw gkhc cogm znhn",
  },
});

function send(email, subject, html) {
  return transporter.sendMail({
    from: "HUB",
    to: email,
    subject,
    html,
  });
}

function sendInfo(newClients) {
  const { name, email } = newClients;

  const html = `
    <h1>${name}, Заявку принято!</h1>
    <p>Незабаром з вами звяжеться наш менеджер, очікуйте дзвінка</p>
    <span>Дякую що звернулись до нас!</span>
  `;

  return send(email, "INFO", html);
}

function sendInfoForCompany(newClients) {
  const { id, name, phone, email, comments } = newClients;

  const html = `
    <h1>${name} зробив заявку!</h1>
    <p>Номер телефону: ${phone}</p>
    <p>Почтова скринька: ${email}</p>
    <p>Коментар: ${comments}</p>
    <p>Id користувача: ${id}</p>
    <span>Не забарюйте!</span>
  `;

  return send(email, "Нова заявка!!!", html);
}

function sendInfoAboutRecruit(newRecruit) {
  const { id, name, phone, email, comments, cvlink } = newRecruit;
  const html = `
    <h1>${name}, надіслав резюме на огляд!</h1>
    <p>Номер телефону: ${phone}</p>
    <p>Почтова скринька: ${email}</p>
    <p>Коментар: ${comments}</p>
    <a href=${cvlink}> Посилання на резюме: ${cvlink}</a>
    <p>Id рекрутера: ${id}</p>
    <span>Не забарюйте!</span>
  `;

  return send(email, `Нове Резюме від ${name}!!!`, html);
}

const mailer = {
  send,
  sendInfo,
  sendInfoForCompany,
  sendInfoAboutRecruit,
};

module.exports = {
  mailer,
};
