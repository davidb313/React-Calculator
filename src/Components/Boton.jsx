import React from 'react';
import '../css/boton.css';

const Boton = (props) => {
  //funcion para determinar si valor es un operador matematico
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };
  return (
    <button
      className={`boton-container ${
        esOperador(props.children) ? 'operador' : ''
      }`.trimEnd()}
      onClick={() => props.handleClic(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Boton;
