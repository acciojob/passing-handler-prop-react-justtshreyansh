import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
   const { background, key, label } = config;
  return (
    <button  data-testid={key} className='fix-box' style={{backgroundColor:config.background}} onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
