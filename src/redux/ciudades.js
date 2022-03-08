import axios from 'axios'
//constantes
const dataInicial = {
    array: []
    //input: 1
    
}
//types
const OBTENER_CIUDADES = 'OBTENER_CIUDADES' 
//reducer
export default function ciudadReducer(state=dataInicial, action){
    switch (action.type) {
        
        case OBTENER_CIUDADES:
            return {
                ...state,
                array: action.payload
            } 
        default:
            return state
    }

}

//acciones

export const obtenerCiudades = (teclaBuscador) => async (dispatch, getState) =>{
    try{
        /* console.log(getState().ciudades.input) */
        const resp = await axios.get('http://localhost:4000/api/ciudades')
        const renderizar = ()=>{
            const filtrados = resp.data.response.ciudades.
            filter(ciudad => ciudad.nombre.substring(0,teclaBuscador.length).toLowerCase().trim() === teclaBuscador.toLowerCase().trim())
            const renderizar = filtrados.length === 0 ? [{nombre:"Oops! We don't have any city or country that matches your search! your search!", id:"estatico"}] : filtrados
            return renderizar
        } 

        dispatch({
            type: OBTENER_CIUDADES,
            payload: renderizar()

        })

    }
    catch(error){
        console.log(error)
    }
}

