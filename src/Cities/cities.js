//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTACIONES EXTERNAS
import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios'
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTACIONES INTERNAS(quiere decir mis componentes)
import Section from './Section';
import cuidades from '../Home/json'

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTACIONES HOJA DE ESTILOS
import './cssCities/buscador.css'
import './cssCities/mainCities.css'


const Cities = () => {
    const [inputBuscador,setBuscador]=useState()
    const [apidata, setApiData ]= useState([...cuidades])
    /* useEffect(()=>{

    axios.get(`../Home/json`)
    .then(response=>setApiData(response))

    },[]) 
    console.log(apidata) */

  
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Render
    return ( 
        <Fragment>
            <main className='mainCities'>
                <h1>MyTinerary</h1>
                <input 
                onKeyUp={(event)=>setBuscador(event.target.value)}
                className='buscador' type="text" placeholder='O-What is the destination of your dreams?'>
                </input>
            </main>
            <Section buscador={inputBuscador} apiInformacion={apidata}/>
        </Fragment>
     );
}
 
export default Cities;


/* useEffect(()=>{

    axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(response=>setApi(response))
    
    },[]) */