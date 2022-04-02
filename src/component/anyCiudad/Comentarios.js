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
    console.log("primero")
 
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
  
    }
    
    async function matarComentario(event) {
      console.log(event.target.id)
      dispatch(eliminarComentario(event.target.id, cambio))
      .then(res=>(res))
  
    }
    
    //console.log(comentarios)
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
                          <h5 className="card-header">
                            {coment?.usuarioId?.nombre}
                          </h5>
                          <div className="card-body ">
                            <textarea type="text" className="card-text textComments" onChange={(event) => setModificar(event.target.value)} value={coment.comentario} />
                            <button id={coment._id} onClick={modificarComentario} >Modificar</button>
                            <button id={coment._id} onClick={matarComentario} >Eliminar</button>
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