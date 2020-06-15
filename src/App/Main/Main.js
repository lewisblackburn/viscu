import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Iconpacks from "../Iconpacks/Iconpacks";
import "./Main.css";

const Main = () => {
  const [icons, setIcons] = useState({
    category: "category",
    data: ["icons", "here"],
  });

  // console.log(localStorage.getItem("ionicons"));

  const importIcons = () => {
    window.electron.dialog
      .showOpenDialog({
        title: "select iconset to import",
        properties: ["openDirectory"],
      })
      .then((data) => {
        var folder = data.filePaths[0];
        if (folder != null) {
          let category = folder.split("\\").slice(-1).pop();
          var isMac = navigator.platform.toUpperCase().indexOf("MAC") >= 0;
          if (isMac) {
            let category = folder.split("/").slice(-1).pop();
          }
          let icons = window.loadIcons(folder);
          // localStorage.setItem(category);
          setIcons({ category, data: icons });
        }
      });
  };

  return (
    <div className="Main">
      <Sidebar className="Main-Sidebar" importIcons={importIcons} />
      <Iconpacks className="Main-Iconpacks" icons={icons} />
    </div>
  );
};

export default Main;
