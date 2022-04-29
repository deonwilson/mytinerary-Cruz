import React from 'react';
import Actividades from './Actividades'
import Comentarios from './Comentarios'
const ComentActividadPar = (props) => {
    return ( 
        <div className="accordion-item accordionItinerario">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed botonAcordeon" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          view more
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body contenedorActividadItinerario">
            <Actividades actividades={props.actividades} />
            <Comentarios itinerarioId= {props.itinerarioId} comentariosTotales={props.comentariosTotales}/>
          </div>
        </div>
      </div>
     );
}
 
export default ComentActividadPar

