import './Select.css';
const Select = (props) => {

    //Metodo map -> arreglo.map((equipo, index) => {
    //  return <option></option>
    //    })

    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y Gestión"
    // ];

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }

    return <div className='Select'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}> {equipo} </option>)}
        </select>


    </div>
}

export default Select;

// <select>
//                 <option>Programación</option>
//                 <option>Front End</option>
//                 <option>Data Science</option>
//                 <option>Devops</option>
//                 <option>UX y Diseño</option>
//                 <option>Móvil</option>
//                 <option>Innovación y Gestión</option>
//             </select>