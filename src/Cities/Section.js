import React,{useState, useEffect} from 'react';
import './cssCities/section.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


const Section = (props) => {
    const [api, setApi] = useState([])
    const cuidadesObtenidas = ciudadesPedido(api, props.buscador) //segun un criterio
    let renderizar = cetinela(cuidadesObtenidas)
    useEffect(()=>{

    axios.get(`http://localhost:4000/api/ciudades`)
        .then(response => setApi(response.data.response.ciudades))
    
    },[])
    return (
     <section>
        { renderizar.map((cuidad, index)=>{
            return(
                <Link to='/anyCities'>
                <div className='imgenCuidadades' key={String(index)} 
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad.imagen})` }}>
                    <h2>{cuidad.nombre}</h2>
                </div>
                </Link>
            )
        })
    }    
    </section>
    );
}
export default Section;






















































const ciudadesPedido = (ciudades, texto="") => [...ciudades.filter(cuidad => cuidad.nombre.substring(0,texto.length).toLowerCase().trim() === texto.toLowerCase().trim())]
const cetinela = listaCiu => (listaCiu.length === 0) ? [{nombre:"Sorry, look for another city that does not exist"}] : listaCiu 