import React, { useState } from 'react';

function Selection({ applyColor }) {
  const [bgStyle, setBgStyle] = useState({});

  const handleClick = () => {
    const apply = applyColor(); // ✅ get latest function
    apply(setBgStyle);          // apply color using latest background
  };

  return (
    <div
      className="fix-box"
      style={bgStyle}
      onClick={handleClick}
    >
      <h5 className="subheading">Selection</h5>
    </div>
  );
}

export default Selection;
