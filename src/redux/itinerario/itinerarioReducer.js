import axios from 'axios'
//constantes
const dataInicial = {
    itinerario: [],
    ciudadRItinerario:[],
    cantidadMg: []
    //input: 1
    
}
//types
const DESPLEGAR_ITINERARIO = 'DESPLEGAR_ITINERARIO' 
const DESPLEGAR_IMAGEN_CIUDAD = "DESPLEGAR_IMAGEN_CIUDAD"
const CLICK_MEGUSTA = "CLICK_MEGUSTA"
//reducer
export default function itinerarioReducer(state=dataInicial, action){
    switch (action.type) {
        
        case DESPLEGAR_ITINERARIO:
            //console.log(action.payload.map(itineraris => itineraris.likes.length))
            return {
                ...state,
                itinerario: action.payload,
                cantidadMg: action.payload.map(itineraris => itineraris.likes.length)
            } 
        case DESPLEGAR_IMAGEN_CIUDAD:
            return {
                ...state,
                ciudadRItinerario: action.payload
                
            }
        case CLICK_MEGUSTA:
            state.cantidadMg[action.posicion] = action.payload
            return{
                ...state,
                cantidadMg: [...state.cantidadMg]
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
        //console.log(itinerarios)
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

export const meGustaNoMegusta = (itinearioId, pos) => async (dispatch, getState) =>{
   
   try{
    const token = localStorage.getItem("token")
    const response= await axios.put(`http://localhost:4000/api/likeDislike/${itinearioId}`,{},{
        headers: {
            'Authorization': 'Bearer ' + token
    }}) 
    dispatch({type: CLICK_MEGUSTA, payload: response.data.response.length, posicion: pos})
   }
   catch(error){
       console.log(error)
   }
}

