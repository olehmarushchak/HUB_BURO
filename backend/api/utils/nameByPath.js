const _ = require("lodash");

function nameByPath(file) {
  const partOfPath = file.split("\\");
  const partOfTitle = partOfPath[partOfPath.length - 1];
  const correctNameByPath = partOfTitle.replaceAll("-", " ");

  return _.capitalize(correctNameByPath) || '404';
}

module.exports = {
  nameByPath,
};
