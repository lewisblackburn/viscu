import React from "react";
import "./Iconpacks.css";

const Iconpacks = (props) => {
  const category = props.icons.category;
  const icons = props.icons.data;
  return (
    <div className="Iconpacks">
      <div className="Iconpacks__container">
        <h1 className="Iconpacks__container-header">{category}</h1>
        <div className="Iconpacks__container-icons">
          {icons.map((icon) => (
            <span dangerouslySetInnerHTML={{ __html: icon }}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Iconpacks;
