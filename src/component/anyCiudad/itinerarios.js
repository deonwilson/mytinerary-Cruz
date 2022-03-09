import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import './cssAnyCities/itinerario.css'
import {desplegarItinerario} from '../../redux/itinerario/itinerarioReducer'
import ComentActividad from './ComentActivi'
const Itinerario = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const itinerariosActuales = useSelector(state => state.itinerarioMain.itinerario)
    console.log(itinerariosActuales)
    useEffect(()=>{
        dispatch(desplegarItinerario(id))
    },[])
    console.log(itinerariosActuales)
    function imprimirBilletes(unNumero){
        let lista= []
        for(let cont=0; cont < unNumero; cont ++){
            lista.push(cont)
        }
        return lista
    }
    
    return ( 

        <>
        { itinerariosActuales?.map((unItinerario, index) =>
        
        <section className='sectionItinerario' key={String(index)}>
            <h3 className='caja uno'>Subtitulo de ejemplo asd</h3>
            
            <div className='caja dos'> 
                <div className='logoItinerario'>
                    {unItinerario.itinerario.foto}
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
                        <p>{unItinerario.itinerario.likes}👍</p>
                        {unItinerario.itinerario.hashtags.map((unHashtags,indexxx)=><p key={indexxx}>{unHashtags}</p> )}
                    </div>
                </div>
            </div>
            <ComentActividad/>
        </section>
        )
        }
        </>

     );
}
 
export default Itinerario;