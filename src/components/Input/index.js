import { useState } from "react";
import "./Input.css";

function Input(props) {
  
  const { type = "text" } = props

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  const placeholderModificado = `${props.placeholder}...`;
  return <div className={`Input Input-${type} `}>
    <label>{props.titulo}</label>
    <input
      placeholder={placeholderModificado}
      required={props.required}
      value={props.valor}
      onChange={manejarCambio}
      type={type}
    />
  </div>
}

export default Input;
