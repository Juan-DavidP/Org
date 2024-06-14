import { useState } from "react";
import "./Form.css";
import Input from "../Input";
import Select from "../Select";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;


  function manejarEnvio(event) {
    event.preventDefault();
    console.log("Manejando el envio");
    let datosAEnviar = {
      //   nombre: nombre,
      //   puesto: puesto,
      //   foto: foto,
      nombre,
      puesto,
      foto,
      equipo
    };

    registrarColaborador(datosAEnviar);
  }

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  }



  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Input
          titulo="Nombre"
          placeholder="Ingresar el nombre"
          required={true}
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Input
          titulo="Puesto"
          placeholder="Ingresar el puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Input
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <Select
          valor={equipo}
          actualizarValor={actualizarEquipo}
          equipos={props.equipos}

        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear un nuevo equipo.</h2>
        <Input
          titulo="titulo"
          placeholder="Ingresar el titulo"
          required={true}
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Input
          titulo="Color"
          placeholder="Ingresar el color del equipo en hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type = "color"
        />
        <Boton>Registrar nuevo equipo</Boton>
      </form>
    </section>

  );
};

export default Formulario;
