import React from "react";

function Tag({ label }) {
  return (
    <div className="tag__container">
      <span className="tag__label">{label}</span>
    </div>
  );
}

export default Tag;