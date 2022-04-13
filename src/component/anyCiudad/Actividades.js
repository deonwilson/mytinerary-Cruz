import React from 'react';
import './cssAnyCities/actividades.css'
const Actividades = (props) => {
    /* console.log(props.actividades) */
    return (
     <>
        <div className='contenedor'>
            <h3>Activitis</h3>
            <div className='imagenesTitulo'>
        {
            props.actividades.map((unaActividad, index) => {
                return(
                    <div key={index} className="imgTitulo">
                        <img src={unaActividad.actividad.foto} alt="un citio"/>
                        <p>{unaActividad.actividad.descripcion}</p>
                    </div>
                )
            })
        }
        </div>
        </div>
     </> 
    )
}
 
export default Actividades;