import axios from 'axios'
//constantes
const dataInicial = {
    itinerario: []
    //input: 1
    
}
//types
const DESPLEGAR_ITINERARIO = 'DESPLEGAR_ITINERARIO' 
//reducer
export default function itinerarioReducer(state=dataInicial, action){
    switch (action.type) {
        
        case DESPLEGAR_ITINERARIO:
            return {
                ...state,
                itinerario: action.payload
            } 
        default:
            return state
    }

}

//acciones

export const desplegarItinerario = (idCiudad) => async (dispatch, getState) =>{
    try{
        /* console.log(idCiudad) */
        const resp = await axios.get(`http://localhost:4000/api/itinerarios/ciudad/${idCiudad}`)
        /* console.log(resp.data.response[0].itinerario) */
        const itinerarios = resp.data.response
        console.log(resp.data.response)
        dispatch({
            type: DESPLEGAR_ITINERARIO,
            payload: itinerarios

        })

    }
    catch(error){
        console.log(error)
    }
}

