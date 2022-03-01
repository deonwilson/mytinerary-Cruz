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
        .then(response => setApi([...response.data.response.ciudades.filter(ciudad => 
            ciudad.nombre.substring(0,props.buscador.length).toLowerCase().trim() === props.buscador.toLowerCase().trim()
        )]))

        
    },[props.buscador])
    
    return ( 
     <section>
        { 
            
            api?.map((ciudad, index) => {
           
            return(
                <Link to='/anyCities' key={String(index)}>
                <div className='imgenCuidadades' 
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

/* const ciudadesPedido =  (ciudades, texto) => [...ciudades.filter(cuidad => cuidad.nombre.substring(0,texto.length).toLowerCase().trim() === texto.toLowerCase().trim())]
const cetinela = listaCiu => (listaCiu.length === 0) ? [{nombre:"Sorry, look for another city that does not exist"}] : listaCiu  */

/* axios.get(`http://localhost:4000/api/ciudades`)
        .then(response => setApi([...response.data.response.ciudades.filter(ciudad => 
            ciudad.nombre.toLowerCase().trim() === props.buscador.toLowerCase().trim()
        )])) */