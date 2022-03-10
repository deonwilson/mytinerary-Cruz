import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import './cssAnyCities/itinerario.css'
import {desplegarItinerario} from '../../redux/itinerario/itinerarioReducer'
import ComentActividadPar from './ComentActivi'
import ComentActividadInpar from './ComentActividadInpar'
const Itinerario = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const itinerariosActuales = useSelector(state => state.itinerarioMain.itinerario)
    /* console.log(itinerariosActuales.length) */

    useEffect(()=>{
        dispatch(desplegarItinerario(id))
    },[])
    /* console.log(itinerariosActuales) */
    
    
    return ( 

        <>
        {   itinerariosActuales.length ===0 ? <div className='noItinerarios'><h4>Itineraries not found for this city. Be the first one!</h4></div>:
            itinerariosActuales.map((unItinerario, index) => 
        <section className='sectionItinerario' key={String(index)}>
            {/* <h3 className='caja uno'>Subtitulo de ejemplo asd</h3> */}
            
            <div className='caja dos'> 
                <div className='logoItinerario'
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/imagenesItinerarios/`+ unItinerario.itinerario.foto})` }}
                >
                </div> 

                <div className='detalle'>
                    <p className='detalleUno'>{unItinerario.itinerario.nombre}</p>
                    <div className='detalleDos'> 
                        <p>price: 
                        { imprimirBilletes(unItinerario.itinerario.price).map((e, indexx)=><span key={indexx}>💵</span>)}                             
                        </p>
                        <p>Duration: {unItinerario.itinerario.duration} horas</p>
                    </div>
                    <div className='detalleTres'>
                        {unItinerario.itinerario.hashtags.map((unHashtags,indexxx)=><p className="unHashtags"key={indexxx}>{unHashtags}</p> )}
                        <p className='meGusta'>{unItinerario.itinerario.likes}👍</p>
                    </div>
                </div>
            </div>
            {
                [1].map(eleme=>{
                    if(index+2%2===0){
                        return(
                            <ComentActividadPar key={index}/>
                        )
                    }else{
                       return(
                        <ComentActividadInpar key={index}/>
                       )
                    }
                } )
            }
        </section>
        
        )
        
        }
        </>

     );
}
 
export default Itinerario;


const imprimirBilletes= unNumero =>{
    let lista= []
    for(let cont=0; cont < unNumero; cont ++){
        lista.push(cont)
    }
    return lista
}

/* function imprimirBilletes(unNumero){
    let lista= []
    for(let cont=0; cont < unNumero; cont ++){
        lista.push(cont)
    }
    return lista
} */