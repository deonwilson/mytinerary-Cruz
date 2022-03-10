import axios from 'axios'
//constantes
const dataInicial = {
    itinerario: [],
    ciudadRItinerario:[]
    //input: 1
    
}
//types
const DESPLEGAR_ITINERARIO = 'DESPLEGAR_ITINERARIO' 
const DESPLEGAR_IMAGEN_CIUDAD = "DESPLEGAR_IMAGEN_CIUDAD"
//reducer
export default function itinerarioReducer(state=dataInicial, action){
    switch (action.type) {
        
        case DESPLEGAR_ITINERARIO:
            return {
                ...state,
                itinerario: action.payload
            } 
        case DESPLEGAR_IMAGEN_CIUDAD:
            return {
                ...state,
                ciudadRItinerario: action.payload
                
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
        /* console.log(resp.data.response) */
        const itinerarios = resp.data.response
        /* console.log(resp.data.response) */
        dispatch({
            type: DESPLEGAR_ITINERARIO,
            payload: itinerarios

        })

    }
    catch(error){
       console.log(error)
    }
}

export const desplegarCiudadRItinerario = (idCiudad) => async (dispatch, getState) =>{
    try{
        /* console.log(idCiudad) */
        const resp = await axios.get(`http://localhost:4000/api/ciudades/${idCiudad}`)
        /* console.log(resp.data.response[0].itinerario) */
        const ciudad = resp.data.response
        /* console.log(resp.data.response) */

        dispatch({
            type: DESPLEGAR_IMAGEN_CIUDAD,
            payload: ciudad

        })

    }
    catch(error){
        console.log(error)
    }
}

