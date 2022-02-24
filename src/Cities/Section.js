import React,{useState} from 'react';
import './cssCities/section.css'
/* import axios from 'axios' */
import cuidades from '../Home/json'


const Section = (props) => {
    const cuidadesTotales = []
    cuidades.map(cuidad => cuidadesTotales.push(...cuidad))
    const textoLimpio= props.buscador //el texto deve llegar limpio sin espacios etc
    console.log(textoLimpio)
    const renderizar = [...cuidadesTotales.filter(cuidadd => cuidadd.nombre.substring(0,textoLimpio.length) == textoLimpio)]
    const cetinela = () => {if(renderizar.length == 0) {return [{nombre:"aprende a escribir jajaja"}]} else{return (renderizar)}} 
    console.log(cetinela())
 return (
        <section>
                {
                        cetinela().map((cuidad, index) =>{ 
                        return(
                        <div className='imgenCuidadades' key={String(index)}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad.imagen})` }}
                        >
                            
                            <h2>{cuidad.nombre}</h2>
                        </div>
                        )
                        })
                }
        </section>
 );
}

 
export default Section;
/* style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[0].imagen})`}} */