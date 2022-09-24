import React from "react";
import Tag from "./Tag";

function RepoCard({ title, subtitle, technologies }) {
  return (
    <div className="repo__container">
      <p className="repo__title">{title}</p>
      <p className="repo__subtitle">{subtitle}</p>
      <div className="repo__tagContainer">
        {technologies.map((tech, index) => (
          <Tag key={index} label={tech} />
        ))}
      </div>
    </div>
  );
}

export default RepoCard;