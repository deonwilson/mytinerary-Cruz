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

export const cargarComentario = (comentario, unCambio) => async (dispatch, getState) =>{
    const token = localStorage.getItem('token')
    const res = await axios.post('http://localhost:4000/api/itinerarios/comentarios', { comentario }, {
                    headers: {
                    'Authorization': `Bearer ${token}`
                    }
                })
            dispatch({type: MENSAJE_CARGADO, payload: !unCambio})
            return res
        
}