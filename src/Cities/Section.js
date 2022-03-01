import React,{useState, useEffect} from 'react';
import './cssCities/section.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
/* import cargarCiudad from '../centralizarAPI/peticionHTTP' */
/* cargarCiudad({imagen: "soy imagen", ciudad:"Buenos Dias"}) */

const Section = (props) => {
    const [api, setApi] = useState([])
    console.log(typeof props.buscador)

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/ciudades`)
            .then(response => setApi(response.data.response.ciudades))
        },[])

    useEffect(()=>{
    axios.get(`http://localhost:4000/api/ciudades`)
        .then(response => {
        const filtrados = response.data.response.ciudades.filter(ciudad => 
        ciudad.nombre.substring(0,props.buscador.length).toLowerCase().trim() === props.buscador.toLowerCase().trim())
        
        const render = filtrados.length === 0 ? [{nombre:"Sorry, look for another city that does not exist"}] : filtrados
        setApi(render)

        })

        
    },[props.buscador])
    
    return ( 
     <section>
        { 
            
            api?.map((ciudad, index) => {            
            return(
                <Link to='/anyCities'  className='imgenCuidadades' key={String(index)}> 
                    <div className='imagenFondo' 
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ ciudad.imagen})` }}>
                        <h2>{ciudad.nombre}</h2>
                    </div>
                </Link>
                )
            
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