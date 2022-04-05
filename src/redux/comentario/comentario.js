import axios from 'axios';

const dataInicial = {
    cambio: false
}
export default function comentarioReducer(state=dataInicial, action){
    
    switch (action.type) {
        
        case MENSAJE_CARGADO:
            
            return {
                ...state,
                cambio: action.payload
            }
        default:
            return state
    }

}
const MENSAJE_CARGADO = "MENSAJE_CARGADO"

const colorAletorio= ()=>{
    const rojo = Math.floor(Math.random()*256)
    const verde = Math.floor(Math.random()*256)
    const azul = Math.floor(Math.random()*256)
    
   return `rgb(${rojo}, ${verde}, ${azul})`
}
export const cargarComentario = (comentario, unCambio) => async (dispatch, getState) =>{
    console.log(colorAletorio())
    const token = localStorage.getItem('token')
    const res = await axios.post('http://localhost:4000/api/itinerarios/comentarios', { comentario }, {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
        
            dispatch({type: MENSAJE_CARGADO, payload: !unCambio})
            return res
        
}
export const actualizarComentario = (comentario, unCambio) => async (dispatch, getState) =>{
   // console.log(comentario)
    const token = localStorage.getItem('token')
    const res = await axios.put('http://localhost:4000/api/itinerarios/comentarios/actualizar', { comentario }, {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
            dispatch({type: MENSAJE_CARGADO, payload: !unCambio})
            return res
        
}

export const eliminarComentario = (id, unCambio) => async (dispatch, getState) =>{
    
    const token = localStorage.getItem('token')
    const res = await axios.post(`http://localhost:4000/api/itinerarios/comentarios/${id}`, {}, {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
            dispatch({type: MENSAJE_CARGADO, payload: !unCambio})
            return res
        
}



