import React from 'react';
/* import ImagenCarousel from './imgCarousel/once.jpeg' */
import './slice/conImg.css';
import GenerarBoton from './generarBoton';
import Generar4Cuidades from './generar4Cuidades';


const Carousel = () => {
    return ( 
        
        <div id="carouselExampleIndicators" className="carousel slide contenedorPadre" data-bs-ride="carousel">

            <h1 className='tituloCarousel'>Popular MYTINERARIES!</h1>
            <div className="carousel-indicators">                                                              
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
                <GenerarBoton/>
                
            </div>
            <div className="carousel-inner">
                    <Generar4Cuidades/>
            </div>
            
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon anteriorr" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon siguiente" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     );
}
 
export default Carousel;
