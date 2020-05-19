import React from "react";

import "./skill.styles.scss";

const Skill = ({ data }) => {
  return (
    <div className="skill">
      <div className="top">
        <div className="image">
          <i className={`${data.imageClass} logo`}></i>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">{data.name.toUpperCase()}</h1>
        <p className="text">{data.description}</p>
      </div>
    </div>
  );
};

export default Skill;
