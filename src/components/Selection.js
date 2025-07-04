
import React, { useState } from 'react';

function Selection({ applyColor }) {
  const [bgStyle, setBgStyle] = useState({});

  const handleClick = () => {
    applyColor(setBgStyle);
  };

  return (
    <div className="fix-box" style={bgStyle} onClick={handleClick}>
      <h5 className="subheading">Selection</h5>
    </div>
  );
}

export default Selection;
