import React from "react";
import "./Iconpacks.css";

const Iconpacks = (props) => {
  return (
    <div className="Iconpacks">
      <div className="Iconpacks__container">
        <h1 className="Iconpacks__container-header">{props.icons.category}</h1>
        <div
          className="Iconpacks__container-icons"
          dangerouslySetInnerHTML={{ __html: props.icons.data }}
        />
      </div>
    </div>
  );
};

export default Iconpacks;
