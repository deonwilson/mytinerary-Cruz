//importaciones externa
import React,{useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
//importaciones interna
import Itinerarios from './itinerarios'
import {desplegarCiudadRItinerario} from '../../redux/itinerario/itinerarioReducer'
import { useDispatch, useSelector } from 'react-redux';
//estilos

const AnyCities = () => {
    const {id} = useParams()
    
    const dispatch= useDispatch()
    const ciudadRItinerario= useSelector(state=>state.itinerarioMain.ciudadRItinerario)
    /* console.log(ciudadRItinerario) */

    useEffect(()=>{
        dispatch(desplegarCiudadRItinerario(id))
    },[])

    return (
            <>  {ciudadRItinerario.map((unaCiudad, index)=>
                (
                <div key={index}>
                    <main className='mainCities' style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ unaCiudad.imagen})` }}>
                        <Link to='/cities' className='botonCuidad'>Cities</Link>
                        <h2 style={{textAlign:"center"}}>{unaCiudad.nombre}</h2>
                        <p>For more information about the itineraries of this city. Scroll a little further down to see all the info.</p>
                    </main>
                    <Itinerarios/>
                </div>
                )
                )
                }
            </>
            

        
    );
}
 
export default AnyCities;