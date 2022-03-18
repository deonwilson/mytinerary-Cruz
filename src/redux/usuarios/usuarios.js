import axios from 'axios'
//constantes
const dataInicial = {
    usuario: null,
    sucedio: false,
    mensaje:[],
    unPais: null,
    paisesDisponibles: 
    ["Select Country","Argentina", "Brasil", "Spain", "Germany", "Italy", "Japan", "England", "France"],
    mensajeLogIn: ""
    
}
//types
const USUARIO = 'USUARIO' 
const MENSAJE = "MENSAJE"
const SELECCIONAR_PAIS = "SELECCIONAR_PAIS"
const MENSAJE_LOGIN = "MENSAJE_LOGIN"
//reducer
export default function usuarioReducer(state=dataInicial, action){
    
    switch (action.type) {
        
        case USUARIO:
            return {
                ...state,
               usuario: action.payload
            } 
        case MENSAJE:
            /* console.log(typeof action.payload.message == 'string') */
            return {
                ...state,
                
                mensaje:
                typeof action.payload.message !== 'string'
                ? 
                action.payload.message.map(mensaje => mensaje.message)
                :
                [action.payload.message],

                sucedio: action.payload.success
            }
        case SELECCIONAR_PAIS:
            return{
                ...state,
                unPais:action.payload
            }
        case MENSAJE_LOGIN:
            return {
                ...state,
                mensajeLogIn:action.payload
            }
        default:
            return state
    }

}

//acciones

export const registrarUsuario = (dataUsuario) => async (dispatch, getState) =>{

        const respuesta = await axios.post('http://localhost:4000/api/autorizacion/signUp', { dataUsuario }) //datos para registrarse
        
        /* console.log(respuesta) */
        
        dispatch({ type: MENSAJE, payload: respuesta.data })
}

export const iniciarSesion= (dataUsuario) => async (dispatch, getState) => {
        
        const usuario = await axios.post('http://localhost:4000/api/autorizacion/signIn', { dataUsuario }) //mandar contra y mail
        console.log(usuario.data)
        if(usuario.data.success){
            localStorage.setItem('token', usuario.data.response.token)
            dispatch({type: USUARIO, payload: usuario.data.response.usuarioData});
        }else{
            console.log("hola")
            /* dispatch({type: MENSAJE_LOGIN, payload: usuario.data.message}) */
        }
} 

export const  cerrarSesion =(sesionCerrada)=>  async (dispatch, getState) => {
    
    const usuario = axios.post('http://localhost:4000/api/autorizacion/signOut',{sesionCerrada}) //mandar mail
    console.log(usuario)
    localStorage.removeItem('token')
    dispatch({type: USUARIO, payload: null})
} 

export const verificarToken = (token) =>  async (dispatch, getState) => {
        
        const user = await axios.get('http://localhost:4000/api/autorizacion/signInToken', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        
        
        if (user.data.success) {
            dispatch({ type: USUARIO, payload: user.data.response });
            dispatch({
                type: MENSAJE,
                payload: {
                    /* view: true, */
                    message: user.data.message,
                   /*  success: user.data.success */
                }
            });
        } else {
            localStorage.removeItem('token')
        }
}

export const seleccionarUnPais= (unPais) => (dispatch, getState) => {
    /* console.log(dataInicial.paisesDisponibles) */
    dataInicial.paisesDisponibles.indexOf(unPais) ? dispatch({type: SELECCIONAR_PAIS, payload: unPais}) : dispatch({type: SELECCIONAR_PAIS, payload: null})
        
    
} 


  /*   unMensaje.split(" ")[0] === ? camposInvalidos.nombre= unMensaje.substring(2) :  camposInvalidos.nombre= unMensaje */
        
  