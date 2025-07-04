import React, { useState } from "react";

function Selection({ selectedColor }) {
  const [bgStyle, setBgStyle] = useState({});

  const handleClick = () => {
    setBgStyle({ backgroundColor: selectedColor });
  };

  return (
    <div className="fix-box" style={bgStyle} onClick={handleClick}>
      <h5 className="subheading">Selection</h5>
    </div>
  );
}

export default Selection;
