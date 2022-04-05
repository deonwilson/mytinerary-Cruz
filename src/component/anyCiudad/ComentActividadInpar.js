import React from 'react';
import Actividades from './Actividades'
import Comentarios from './Comentarios'
const ComentActividadInpar = (props) => {
    return ( 
        <div className="accordion-item accordionItinerario">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed botonAcordeon" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              view more
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <Actividades actividades={props.actividades}/>
                <Comentarios itinerarioId= {props.itinerarioId} comentariosTotales={props.comentariosTotales}/>
              </div>
          </div>
        </div>
     );
}
 
export default ComentActividadInpar;