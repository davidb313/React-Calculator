import './App.css';
import { useState } from 'react';
import Boton from './Components/Boton';
import Pantalla from './Components/Pantalla';
import BotonClear from './Components/BotonClear';
import math, { evaluate, isNaN } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  /**
   *Esta funcion renderiza el valor del tocon que se presiona en la calculadora
   *
   * @param {*} value
   */
  const agregarInput = (value) => {
    setInput(input + value);
  };
  /**
   *Esta funcion reinicia setea por medio de setInput('') a su estado inicial, un string vacío
   *
   */
  const resetInput = () => {
    setInput('');
  };
  /**
   *Esta funcion evalua matematicamente el valor de input, se debe importar desde mathjs
   *
   */
  const calcularResultado = () => {
    if (input === '') {
      alert('Por favor ingrese valores para realizar los calculos');
    } else {
      setInput(evaluate(input));
    }
  };

  return (
    <div className='App'>
      {/*contenedor de la calculadora*/}
      <div className='calculator-container'>
        <Pantalla input={input} />
        {/*filas de la calculadora*/}
        <div className='fila'>
          <Boton handleClic={agregarInput}>7</Boton>
          <Boton handleClic={agregarInput}>8</Boton>
          <Boton handleClic={agregarInput}>9</Boton>
          <Boton handleClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={agregarInput}>4</Boton>
          <Boton handleClic={agregarInput}>5</Boton>
          <Boton handleClic={agregarInput}>6</Boton>
          <Boton handleClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton handleClic={agregarInput}>1</Boton>
          <Boton handleClic={agregarInput}>2</Boton>
          <Boton handleClic={agregarInput}>3</Boton>
          <Boton handleClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton handleClic={agregarInput}>0</Boton>
          <Boton handleClic={agregarInput}>.</Boton>
          <Boton handleClic={calcularResultado}>=</Boton>
          <Boton handleClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <BotonClear handleClic={resetInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
