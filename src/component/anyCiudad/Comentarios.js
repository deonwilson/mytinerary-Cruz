import React,{ useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {cargarComentario} from '../../redux/comentario/comentario'
import './cssAnyCities/comentarios.css'
const Comentarios = (props) => {
    const dispatch = useDispatch()
    const usuario = useSelector(state => state.usuarioMain.usuario)
    const cambio = useSelector(state => state.comentarioMain.cambio)
    //console.log(typeof props.comentariosTotales)
    const [inputText, setInputText] = useState()

  
    async function cargarUnComentario(event) {
      
      const comentarioUsuario = {
        itinerarioId: props.itinerarioId,
        comentario: inputText,
      }
      
      //quiero el conjuntod de comentarios dependiendo de un id
      await dispatch(cargarComentario(comentarioUsuario, cambio))
      .then(res => console.log(res.data.response.nuevoComentario.comentarios), setInputText(""))
      
    }
    return ( 
            <div className='comentarios'>
                
                {  typeof props.comentariosTotales !== "undefined" ?
                
                props.comentariosTotales.map((coment,index) => {
                    console.log(coment)
                        return(
                            <p key={index}>{coment.comentario}</p>
                        )
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