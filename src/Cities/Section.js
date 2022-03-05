import React,{useState, useEffect} from 'react';
import './cssCities/section.css'
import axios from 'axios'
import {Link as LinkRouter} from "react-router-dom"

/* import cargarCiudad from '../centralizarAPI/peticionHTTP' */
/* cargarCiudad({imagen: "soy imagen", ciudad:"Buenos Dias"}) */

const Section = (props) => {
    const [api, setApi] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/ciudades`)
            .then(response => setApi(response.data.response.ciudades))
        },[])
        
    useEffect(()=>{
    axios.get(`http://localhost:4000/api/ciudades`)
        .then(response => {
        const filtrados = response.data.response.ciudades.filter(ciudad => 
        ciudad.nombre.substring(0,props.buscador.length).toLowerCase().trim() === props.buscador.toLowerCase().trim())
        
        const render = filtrados.length === 0 ? [{nombre:"Oops! We don't have any city or country that matches your search! your search!", id:"estatico"}] : filtrados
        setApi(render)
        })
        
    },[props.buscador])
    
    return ( 
     <section>
        { 
            
            api?.map((ciudad, index) => {
                
                if(ciudad.id !== "estatico"){
                    //<LinkRouter >
            return(
                
                
                <LinkRouter to={ciudad._id}  className='imgenCuidadades' key={String(index)}>
                    <div className='imagenFondo' 
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ ciudad.imagen})` }}>
                        <h2>{ciudad.nombre}</h2>
                    </div>
                </LinkRouter> 
                )
            }
            else{
                return (
                    <div className='imgenCuidadades' key={String(index)}>
                        <div className='imagenFondo' >
                            <h2>{ciudad.nombre}</h2>
                        </div>
                    </div>
                )
            }
            
        })
    }    
    </section>
    );
}
export default Section;


/* .then(response => setApi([...response.data.response.ciudades.filter(ciudad => 
    ciudad.nombre.substring(0,props.buscador.length).toLowerCase().trim() === props.buscador.toLowerCase().trim()
)].length === 0 ? [{nombre:"Sorry, look for another city that does not exist"}] : [...response.data.response.ciudades.filter(ciudad => 
    ciudad.nombre.substring(0,props.buscador.length).toLowerCase().trim() === props.buscador.toLowerCase().trim()
)]
)) */