import React from 'react';
import '../css/boton-clear.css';

const BotonClear = ({ handleClic }) => {
  return (
    <div className='boton-clear' onClick={handleClic}>
      Clear
    </div>
  );
};

export default BotonClear;
