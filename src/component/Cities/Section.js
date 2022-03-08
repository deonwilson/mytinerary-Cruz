import React,{useEffect} from 'react';
import './cssCities/section.css'

import {Link as LinkRouter} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux';
//interna
import {obtenerCiudades} from '../../redux/ciudades'

const Section = () => {
    const ciudades = useSelector(state=> state.ciudades.array)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(obtenerCiudades(""))
    },[])
    return ( 
     <section>
        {
            ciudades?.map((ciudad, index) => {
                if(ciudad.id !== "estatico"){
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