import React, { useState } from "react";
import '../styles/App.css';
import Selection from './Selection';              
import ColourSelector from './ColourSelector';  

const colourConfig = [
  {
    key: 'blue',
    label: 'Blue',
    classname: 'btn-blue',
    background: 'rgb(0, 0, 255)'
  },
  {
    key: 'orange',
    label: 'Orange',
    classname: 'btn-orange',
    background: 'rgb(255, 165, 0)'
  },
  {
    key: 'green',
    label: 'Green',
    classname: 'btn-green',
    background: 'rgb(0, 128, 0)'
  }
];

const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  const [nextBackground, selectNextBackground] = useState({ background: "" });

  // ✅ Return a function so latest value of nextBackground is always used
  const applyColor = () => {
    return (updateSelectionStyle) => {
      updateSelectionStyle(nextBackground);
    };
  };

  return (
    <div id="master">
      <h5 className="heading">{title}</h5>

      <div className="row">
        {colourConfig.map((config) => (
          <ColourSelector
            key={config.key}
            config={config}
            selectNextBackground={selectNextBackground}
          />
        ))}
      </div>

      <div className='row' id="children-wrapper">
        {["selection1", "selection2", "selection3"].map((key) => (
          <Selection key={key} applyColor={applyColor} />
        ))}
      </div>
    </div>
  );
};

export default App;
