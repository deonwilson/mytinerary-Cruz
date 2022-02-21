import { type } from '@testing-library/user-event/dist/type';
import React, { Fragment } from 'react';

import cuidades from '../json';
const GenerarBoton = () => {
    let indexAcum
    return (
        
        <Fragment>
            {cuidades.map((element, index) =>{
                if(index >0){
                indexAcum = "Slide " + String((index + 1))
                return (
                    <Fragment>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={String(index)} aria-label={indexAcum}></button>    
                    </Fragment>
                )
                }

            } )
                
               
            }
            
        </Fragment>  
     );
}
 
export default GenerarBoton;