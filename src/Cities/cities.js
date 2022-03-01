//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTACIONES EXTERNAS
import React, {Fragment, useState} from 'react';

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTACIONES INTERNAS(quiere decir mis componentes)
import Section from './Section';

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>IMPORTACIONES HOJA DE ESTILOS
import './cssCities/buscador.css'
import './cssCities/mainCities.css'
import './cssCities/section.css'

const Cities = () => {
    const [inputBuscador,setBuscador]= useState()
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
            <Section buscador={inputBuscador}/> 
        </Fragment>
     );
}
 
export default Cities;


