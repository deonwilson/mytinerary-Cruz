import React from 'react';
/* import ImagenCarousel from './imgCarousel/once.jpeg' */
import './slice/conImg.css'
const Carousel = () => {
    return ( 
        
        <div id="carouselExampleIndicators" className="carousel slide contenedorPadre" data-bs-ride="carousel">
            <h1 className='tituloCarousel'>Popular MYTINERARIES!</h1>
            <div className="carousel-indicators">                                                               {/*# = active */}
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {/* contenedor Imagen Uno*/}
                <div className="carousel-item active primerContenedor">
                        <div className='hijo'>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>Una cuidad</h2>
                            </div>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>otra cuidad</h2>
                            </div>    
                        </div>
                        <div className='hijo'>
                            <div className='imgenCuidad'>   {/* url dinamico */}
                                <h2>Una cuidad</h2>
                            </div>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>otra cuidad</h2>
                            </div>    
                        </div>
                        
                </div>
                {/* contenedor Imagen Dos*/}
                <div className="carousel-item primerContenedor">
                        <div className='hijo'>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>Una cuidad</h2>
                            </div>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>otra cuidad</h2>
                            </div>    
                        </div>
                        <div className='hijo'>
                            <div className='imgenCuidad'>   {/* url dinamico */}
                                <h2>Una cuidad</h2>
                            </div>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>otra cuidad</h2>
                            </div>    
                        </div>
                        
                </div>
                {/* contenedor Imagen tres*/}
                <div className="carousel-item primerContenedor">
                        <div className='hijo'>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>Una cuidad</h2>
                            </div>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>otra cuidad</h2>
                            </div>    
                        </div>
                        <div className='hijo'>
                            <div className='imgenCuidad'>   {/* url dinamico */}
                                <h2>Una cuidad</h2>
                            </div>
                            <div className='imgenCuidad'> {/* url dinamico */}
                                <h2>otra cuidad</h2>
                            </div>    
                        </div>
                        
                </div>
            </div>
            
            <button className="carousel-control-prev anterior" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
     );
}
 
export default Carousel;