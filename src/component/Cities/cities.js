//externas
import React, {Fragment} from 'react';
import { useDispatch} from 'react-redux';
//internas
import Section from './Section';
import {obtenerCiudades} from '../../redux/ciudades/ciudades'
//estilos
import './cssCities/buscador.css'
import './cssCities/mainCities.css'
import './cssCities/section.css'
/* import Footer from '../Home/dFooter/Footer'; */

const Cities = () => {
    
    const dispatch =useDispatch()
    return ( 
        <Fragment>
            <main className='mainCities'>
                <h1>MyTinerary</h1>
                <input 
                onKeyUp={(event) => dispatch(obtenerCiudades(event.target.value))}
                className='buscador' type="text" placeholder='O- Search a city'>
                </input>
            </main>
            <Section/>
            {/* <Footer/> */}
        </Fragment>
     );
}
 
export default Cities;




