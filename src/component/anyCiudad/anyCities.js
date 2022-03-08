//importaciones externa
import React,{useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
//importaciones interna
import Itinerarios from './itinerarios'
//estilos


const AnyCities = () => {
    const {id} = useParams()
    const [ciudad, setCiudad] = useState([])
    console.log(ciudad)
    useEffect(()=>{
            axios.get(`http://localhost:4000/api/ciudades/${id}`)
                .then(response => 
                    setCiudad(response.data.response)
                )
    },[])

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/itinerarios`)
            .then(response => 
                console.log(response.data.response)
            )
    },[])

    return (
            <>  {ciudad.map((unaCiudad, index)=>
                (
                <div key={index}>
                    <main className='mainCities' style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ unaCiudad.imagen})` }}>
                        <Link to='/cities' className='botonCuidad'> Cities</Link>
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