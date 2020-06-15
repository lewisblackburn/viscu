import React from "react";
import "./Sidebar.css";

const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div className="Sidebar__container">
        <input className="Sidebar__container-search" />

        <div className="Sidebar__footer">
          <button
            className="Sidebar__footer-button"
            onClick={props.importIcons}
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
