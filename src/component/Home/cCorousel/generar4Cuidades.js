import React, {Fragment} from 'react';
import cuidades from '../json';

const Generar4Cuidades = () => {
    //dato se ejecuta una ves(osea en la posicion 0)
    
    return ( 
        <Fragment>
        {cuidades.map((cuidad, index) =>{
            if(index === 0){
                return (
                    
                        <div className="carousel-item active primerContenedor" key={String((index + 1) )} >
                            <div className='hijo'>
                                <div className='imgenCuidad'
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[0].imagen})` }}
                                >
                                    <h2>{cuidad[0].nombre}</h2>    
                                </div>
                                <div className='imgenCuidad' 
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[1].imagen})` }}
                                > 
                                    <h2>{cuidad[1].nombre}</h2>
                                </div>
                            </div>
                            <div className='hijo'>
                                <div className='imgenCuidad' 
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[2].imagen})` }}
                                > 
                                    <h2>{cuidad[2].nombre}</h2>
                                </div>
                                <div className='imgenCuidad' 
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[3].imagen})` }}
                                > 
                                    <h2>{cuidad[3].nombre}</h2>
                                </div>
                            </div>     
                        </div>
                )
            }
            else{
                return (
                    
                        <div className="carousel-item primerContenedor" key={String(index +1)}>
                            <div className='hijo'>
                                <div className='imgenCuidad'
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[0].imagen})` }}
                                >
                                    <h2>{cuidad[0].nombre}</h2>    
                                </div>
                                <div className='imgenCuidad' 
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[1].imagen})` }}
                                > 
                                    <h2>{cuidad[1].nombre}</h2>
                                </div>
                            </div>
                            <div className='hijo'>
                                <div className='imgenCuidad' 
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[2].imagen})` }}
                                > 
                                    <h2>{cuidad[2].nombre}</h2>
                                </div>
                                <div className='imgenCuidad' 
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenes/`+ cuidad[3].imagen})` }}
                                > 
                                    <h2>{cuidad[3].nombre}</h2>
                                </div>
                            </div>     
                        </div>
                    
                )
            }

            
        }
        )
        }  
        </Fragment>
       
       
        
    );
}
 
export default Generar4Cuidades;