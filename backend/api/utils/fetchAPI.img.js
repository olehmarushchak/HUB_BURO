const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

function fetchAPIurl(imagePath, retries = 3, file = '') {
  const apiKey =
    "imge_uG71_8614ccfc432ad5851ed52e047577fd92c4b083b488eefd52b3278b380f3e59e1a247f4692d18729b7339e176fef52ce303b02c66c89e9b67a314531425ec9f74";
  const uploadUrl = "https://im.ge/api/1/upload";

  if (!fs.existsSync(imagePath)) {

    return '404 not found main-view in: ' + file;
  }

  const form = new FormData();
  form.append("source", fs.createReadStream(imagePath));
  console.log([imagePath]);

  return axios
    .post(uploadUrl, form, {
      headers: {
        "X-API-Key": apiKey,
        ...form.getHeaders(),
      },
      timeout: 120000, // Set timeout to 2 minutes
    })
    .then((response) => {
      console.log("Upload successful!");
      console.log("Image URL:", response.data.image.url);

      retries = 3;
      return response.data.image.url;
    })
    .catch((error) => {
      console.error("Error uploading image:", error.message);

      if (error.response) {
        console.error("Response data:", error.response.data);
      }

      if (error.message.includes("400") && retries > 0) {
        console.log(`Retrying upload... Attempts left: ${retries}`);
        return fetchAPIurl(imagePath, retries - 1);
      }

      return imagePath + "ERROR-LOADED";
    });
}

module.exports = {
  fetchAPIurl,
};
