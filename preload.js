// Open File Explorer
const { dialog } = require("electron").remote;
window.electron = {};
window.electron.dialog = dialog;

// Read Icons
const { readdirSync, readFileSync } = require("fs");
const path = require("path");

window.loadIcons = function (folder) {
  const data = readdirSync(folder, "utf-8");
  var icons = [];
  const filter = ".svg";

  data.forEach((file) => {
    var extension = path.extname(file);
    if (extension === ".svg") {
      const location = `${folder}/${file}`;
      const icon = readFileSync(location, "utf-8");
      icons.push(icon);
    }
  });

  return icons;
};

// console.log(folder);
// readdir(folder, "utf-8", function read(err, data) {
//   if (err) {
//     throw err;
//   }

//   const icons = data;
//   console.log(data);
//   // setIcons({ filename: category, data: data });
// });
