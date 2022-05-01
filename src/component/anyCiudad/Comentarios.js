import React,{ useState} from 'react';
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
     
      setTimeout(()=>{
        tirarAbajo()
        console.log("un segundo")
      },400)
      
    }
    
    const tirarAbajo =() =>{
      const altoAnterior = document.querySelector('.soloComentarios').scrollHeight + 251
      console.log(altoAnterior)
      document.querySelector('.soloComentarios').scrollTo(0, altoAnterior)
      console.log(document.querySelector('.soloComentarios'))
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
   
    function reescribirTextoActual(unComentId){
      if(!actualModificacion){
      setActualModificacion(!actualModificacion)
      setComentarioId(unComentId)
      }else{
        setActualModificacion(actualModificacion)
      setComentarioId(unComentId)
      }
     
     
    }
    
    //console.log(comentarios)
    function onKeyPress(event) {
      if (event.key === "Enter") {
        modificarComentario(event);
        
      }
    }
    //chiches
    console.log("asd")
   
    
    return ( 
            <div className='comentarios'>
                <div className='soloComentarios' id='hola'>
                {  typeof props?.comentariosTotales !== "undefined" ?
                
                props?.comentariosTotales?.map((coment, index) => {
                  
                    if(coment?.usuarioId?._id !== usuario?.id ){
                      /* console.log(coment.usuarioId) */
                        return(<div key={index} className="unComentario">
                                  <p style={{color:`${coment.usuarioId.color}`}}>{coment.usuarioId.nombre}</p>
                                  <p>{coment.comentario}</p>
                                </div>
                        )
                    }else{
                      /* console.log(coment.usuarioId.color) */
                      return(
                        <div className="unComentarioLogeado" key={index}>

                          <p className='nameLogueado' style={{color:`${coment.usuarioId.color}`}}>{coment.usuarioId.nombre}</p>
                          
                            { !actualModificacion ?
                            <>
                            <div className='editComentario'> 
                              <button className="btn btn-secondary dropdown-toggle botonOpciones" data-bs-toggle="dropdown" aria-expanded="false"/>
                              <ul className="dropdown-menu">
                                <li><button id={coment._id} onClick={()=>reescribirTextoActual(coment._id)} >Modificar</button></li>
                                <li><button id={coment._id} onClick={matarComentario} >Eliminar</button></li>
                              </ul>
                            </div>
                            <p className='comentarioSolo'>{coment.comentario}</p>
                            </>
                            :<>
                            { comentarioId !==coment._id ?
                            <>
                            <button className="btn btn-secondary dropdown-toggle botonOpciones" data-bs-toggle="dropdown" aria-expanded="false"/>
                            <ul className="dropdown-menu">
                              <li><button id={coment._id} onClick={()=>reescribirTextoActual(coment._id)} >Modificar</button></li>
                              <li><button id={coment._id} onClick={matarComentario} >Eliminar</button></li>
                            </ul>
                            <p className='comentarioSolo'>{coment.comentario}</p>
                            </>
                            :
                            <div className="ConteinerUsercomment">
                              <textarea className="cardmodificable" type="text"onChange={(event) => setModificar(event.target.value)}
                                onKeyPress={onKeyPress}
                                defaultValue={coment.comentario}
                                id={coment._id}
                              />
                              <button id={coment._id} onClick={modificarComentario} className="buttonModify" >Modify</button>
                            </div>
                            }
                            </>
                            }
                          
                        </div>
                      )
                    }
                    
                    })
                  :
                  
                  <p>Comments</p>
                 }
                </div> {/* hasta aca es comentarios */}
                {usuario ?
                  <div className="card cardComments">
                    
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button  onClick={cargarUnComentario} className="enviar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/send.png`})` }}></button>
      
                  </div> 
                  :
                  <div className="card cardComments">
                    
                      <textarea className="card-text textComments"  />
                      <button   className="enviar" style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/send.png`})` }}></button>
      
                  </div>
                }
            </div> );
}
 
export default Comentarios;