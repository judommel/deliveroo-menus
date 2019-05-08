import React from "react";

function Title(props) {
  const { name, description, pic } = props;

  return (
    <div className="title">
      <div className="container-title title-content">
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <img src={pic} alt={name + "poster"} className="title-pic" />
      </div>
    </div>
  );
}

export default Title;
