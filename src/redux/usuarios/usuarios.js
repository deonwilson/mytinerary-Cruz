import axios from 'axios'
//constantes
const dataInicial = {
    usuario: null,
    mensaje: null
    
}
//types
const USUARIO = 'USUARIO' 
const MENSAJE = "MENSAJE"
//reducer
export default function usuarioReducer(state=dataInicial, action){
    switch (action.type) {
        
        case USUARIO:
            return {
                ...state,
               usuario: action.payload
            } 
        case MENSAJE:
            return {
                ...state,
                mensaje: action.payload

            }
        default:
            return state
    }

}

//acciones

export const registrarUsuario = (dataUsuario) => async (dispatch, getState) =>{

        const respuesta = await axios.post('http://localhost:4000/api/autorizacion/signUp', { dataUsuario }) //datos para registrarse
        /* console.log(respuesta.data.message) */
        dispatch({ type: MENSAJE, payload: respuesta.data.message })
}

export const iniciarSesion= (dataUsuario) => async (dispatch, getState) => {
        
        const usuario = await axios.post('http://localhost:4000/api/autorizacion/signIn', { dataUsuario }) //mandar contra y mail
        
        if(usuario.data.success){
            localStorage.setItem('token', usuario.data.response.token)
            dispatch({type: USUARIO, payload: usuario.data.response.usuarioData});
        }else{
            console.log(usuario.data.message)
        }
} 

export const  cerrarSesion =(sesionCerrada)=>  async (dispatch, getState) => {
    
    const usuario = axios.post('http://localhost:4000/api/autorizacion/signOut',{sesionCerrada}) //mandar mail
    console.log(usuario)
    localStorage.removeItem('token')
    dispatch({type: USUARIO, payload: null})
} 

export const verificarToken = (token) =>  async (dispatch, getState) => {
        console.log(token)
        const user = await axios.get('http://localhost:4000/api/autorizacion/signInToken', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        console.log(user)
        
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
   
