import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      nombre: "Juan David",
      puesto: "Estudiante",
      foto: "https://github.com/Juan-DavidP.png",
      equipo: "Front End",
      fav: true
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  //

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }


  function registrarColaborador(colaborador) {
    console.log("Nuevo colaborador: ", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  function eliminarColaborador(id) {
    console.log("Elminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Cambiar color equipo

  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear equipo

  function crearEquipo(nuevoEquipo) {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])

  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id == id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  //Lista de equipos /Se remplazo por un estado para permitir el cambio de color de fondo/
  // const equipos = [
  //   {
  //     titulo: "Programación",
  //     colorPrimario: "#57C278",
  //     colorSecundario: "#D9F7E9"
  //   },
  //   {
  //     titulo: "Front End",
  //     colorPrimario: "#82CFFA",
  //     colorSecundario: "#E8F8FF"
  //   },
  //   {
  //     titulo: "Data Science",
  //     colorPrimario: "#A6D157",
  //     colorSecundario: "#F0F8E2"
  //   },
  //   {
  //     titulo: "Devops",
  //     colorPrimario: "#E06B69",
  //     colorSecundario: "#FDE7E8"
  //   },
  //   {
  //     titulo: "UX y Diseño",
  //     colorPrimario: "#DB6EBF",
  //     colorSecundario: "#FAE9F5"
  //   },
  //   {
  //     titulo: "Móvil",
  //     colorPrimario: "#FFBA05",
  //     colorSecundario: "#FFF5D9"
  //   },
  //   {
  //     titulo: "Innovación y Gestión",
  //     colorPrimario: "#FF8A29",
  //     colorSecundario: "#FFEEDF"
  //   }
  // ];

  return (
    <div>
      {/*{Header()}
      <Header></Header>*/}
      <Header />
      {/* {mostrarFormulario === true ? <Form /> : <div></div>} */}
      {/* {mostrarFormulario ? <Form /> : <></>} */}
      {mostrarFormulario && <Form
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
