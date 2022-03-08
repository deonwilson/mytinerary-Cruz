import React from 'react';
import './cssAnyCities/itinerario.css'
const Itinerario = () => {
    return ( 
        /* soy su padre aganme caso"" */
        <section className='sectionItinerario'>
            {/* caja 1 */}
            <h3 className='caja uno'>Subtitulo de ejemplo asd</h3>
            {/* caja 2 */}
            <div className='caja dos'> 
                <div className='logoItinerario'>   {/* logo */}
                    logo
                </div> 

                <div className='detalle'>
                    <p className='detalleUno'>Nombre Apellido</p>{/* nombre y apellido */}
                    <div className='detalleDos'> {/* price, duration, time */}
                        <p>price:logo billete</p>
                        <p>Duration: X horas</p>
                    </div>
                    <div className='detalleTres'>{/* 3 # (hashtags), like inicial 0 */}
                        <p>like: loco corazon</p>
                        <p>#ejemploX #ejemploY</p>
                        <p>#ejemploZ</p>

                    </div>
                </div>
            </div>
            {/* caja 3 */}
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Under construction</strong> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

     );
}
 
export default Itinerario;