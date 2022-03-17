import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//importaciones internas
import {iniciarSesion} from '../../redux/usuarios/usuarios'
import FacebookSignIn from './FacebookSignIn'
import './cssLoguear/form.css'
const SignIn = () => {
    const dispatch = useDispatch()
    const usuario = useSelector(state=> state.usuarioMain.usuario)

    const handleSubmit = (event) => {
		event.preventDefault()
        
		const dataUsuario = {
			email: event.target[0].value,
			contrasenia: event.target[1].value,
			/* from: "form-Signin" */
			from: "form-Signup" 
		}
		dispatch(iniciarSesion(dataUsuario))
	}
    console.log(usuario)
    /* useEffect(()=>{
       dispatch(iniciarSesion(dataUsuario))
    },[]) */
    
    return ( 
        <>
        <div>.</div>
            <div className="loginFacebook">
                <FacebookSignIn />
            </div>
             
            <form onSubmit={handleSubmit} className="flex">
                <div className="factorComun mailMasNombre">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>   
                </div>

                <div className="factorComun mailMasNombre">
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                </div>
                <div className="terminoEnviar">
                    <button type="submit" className="inputEnviar">Log In</button>
                </div>
            </form>
        </>
     );
}
 
export default SignIn;