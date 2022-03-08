import React, { Fragment } from 'react';

import cuidades from '../json';
const GenerarBoton = () => {
    
    let indexAcum
    return (
        <Fragment>
            {cuidades.map((elemento, index) =>{
                
                if(index >0){
                indexAcum = "Slide " + String((index + 1))
                return (
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={String(index)} aria-label={indexAcum} key={String(index+1)}></button>
                )
                }
                else{
                   return (<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" key={String(index+1)}></button>) 
                }
            } )
               
            }
            
        </Fragment>
     );
}
 
export default GenerarBoton;