const fs = require("fs");
const mammoth = require("mammoth");

async function convertDocxToText(docxFilePath) {
    try {
      // Прочитать DOCX файл
      const buffer = fs.readFileSync(docxFilePath);
  
      // Преобразовать DOCX в текст
      const result = await mammoth.extractRawText({ buffer });
  
      // Получить текст и вернуть его
      const text = result.value;
      return text;
    } catch (error) {
      console.error("Ошибка при преобразовании файла:", error);
      return '404'; // Возвращаем 404 в случае ошибки
    }
  }
  
module.exports = {
  convertDocxToText,
};
