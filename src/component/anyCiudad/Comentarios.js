import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {cargarComentario, actualizarComentario, eliminarComentario} from '../../redux/comentario/comentario'
import './cssAnyCities/comentarios.css'
const Comentarios = (props) => {
    const dispatch = useDispatch()
    const usuario = useSelector(state => state.usuarioMain.usuario)
    const cambio = useSelector(state => state.comentarioMain.cambio)
    const [inputText, setInputText] = useState()
    const [modificar, setModificar] = useState()
    const [actualModificacion, setActualModificacion] = useState(false)
    const [comentarioId ,setComentarioId] = useState()
 
 
    async function cargarUnComentario(event) {
      
      const comentarioUsuario = {
        itinerarioId: props.itinerarioId,
        comentario: inputText
      }
      //quiero el conjuntod de comentarios dependiendo de un id
      await dispatch(cargarComentario(comentarioUsuario, cambio))
      .then(res => (res.data.response.nuevoComentario.comentarios), setInputText(""))
    
    }
    
    async function modificarComentario(event) {
     
      const comentarioUsuario = {
        comentarioId: event.target.id,
        comentario: modificar
      }
      //console.log(comentarioUsuario)
      await dispatch(actualizarComentario(comentarioUsuario, cambio))
      .then(res=>console.log(res))
      setComentarioId("")
      setActualModificacion(false)
    }
    
    async function matarComentario(event) {
      console.log(event.target.value)
      dispatch(eliminarComentario(event.target.id, cambio))
      .then(res=>(res))
      
    }
    function reescribirTextoPasado(unComentId){
   
      setActualModificacion(!actualModificacion)
      setComentarioId(unComentId)
      
     
    }
    function reescribirTextoActual(unComentId){
   
      setActualModificacion(!actualModificacion)
      setComentarioId(unComentId)
     
    }
    
    //console.log(comentarios)
    function onKeyPress(event) {
      if (event.key === "Enter") {
        modificarComentario(event);
        
      }
    }
    return ( 
            <div className='comentarios'>
                
                {  typeof props?.comentariosTotales !== "undefined" ?
                
                props?.comentariosTotales?.map((coment, index) => {
                  
                    if(coment?.usuarioId?._id !== usuario?.id ){
                    
                        return(<div key={index}>
                            <h5>{coment.usuarioId.nombre}</h5>
                            <p>{coment.comentario}</p>
                            </div>
                        )
                    }else{
                     
                      return(
                        <div className="card cardComments" key={index}>

                          <h5 className="card-header">{coment?.usuarioId?.nombre}</h5>
                          <div className="btn-group dropup">
                            { !actualModificacion ?
                            <>
                            <p className='unComentario'>{coment.comentario}</p>
                            <button type="comentario" className="btn btn-secondary dropdown-toggle editComentario" data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu">
                              <li><button id={coment._id} onClick={()=>reescribirTextoPasado(coment._id)} >Modificar</button></li>
                              <li><button id={coment._id} onClick={matarComentario} >Eliminar</button></li>
                            </ul>
                            </>
                            :<>
                            { comentarioId !==coment._id ?
                            <>
                            <p className='unComentario'>{coment.comentario}</p>
                            <button type="comentario" className="btn btn-secondary dropdown-toggle editComentario" data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu">
                              <li><button id={coment._id} onClick={()=>reescribirTextoActual(coment._id)} >Modificar</button></li>
                              <li><button id={coment._id} onClick={matarComentario} >Eliminar</button></li>
                            </ul>
                            </>
                            :
                            <div className="ConteinerUsercomment">
                              <textarea className="cardmodificable" type="text"onChange={(event) => setModificar(event.target.value)}
                                onKeyPress={onKeyPress}
                                defaultValue={coment.comentario}
                                id={coment._id}
                              />
                              <button id={coment._id} onClick={modificarComentario} >editar</button>
                            </div>
                            }
                            </>
                            }
                          </div>
                        </div>
                      )
                    }
                    
                    })
                  :
                  
                  <p>realiza el primer comentario</p>
                 }
                {usuario ?
                  <div className="card cardComments">
                    <div className="card-header">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div className="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button onClick={cargarUnComentario} className="btn btn-primary">Cargar</button>
                    </div>
                  </div> :
                  <h1>loguea rey comentame xD</h1>
                }
            </div> );
}
 
export default Comentarios;