import React from 'react'
import {Link} from 'react-router-dom'
import './cssMain/main.css'
import imagenAvion from './imgMain/avion.png'

const Main = () => {
    return ( 
        <main>
            <div className='locoMasTitulo'>
                <div className='imagenLogo'><img src ={imagenAvion} alt="logoAvion"></img></div>
                <div className='tituloMasSub'>
                    <h1>MyTinerary</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                </div>
                <Link to='/cities' className='botonCuidad'> Cities</Link>
                
            </div>
        </main>
     );
}
 
export default Main;