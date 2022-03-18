//importaciones externas
import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//importaciones internas (logica)
import {registrarUsuario, seleccionarUnPais} from '../../redux/usuarios/usuarios'
//importaciones internas (foto, datos, hoja de estilos, etc)
import './cssLoguear/form.css'
import FacebookSignUp from './SingUpFacebook'



const SignUp = () => {
    const estadoPais = useSelector(state => state.usuarioMain.unPais)
    const paises = useSelector(state => state.usuarioMain.paisesDisponibles)
    const mensaje = useSelector(state => state.usuarioMain.mensaje)
    /* console.log(mensaje) */
    const dispatch = useDispatch()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const userData={
            nombre:event.target[0].value,
            apellido:event.target[1].value,
            email:event.target[2].value,
            contrasenia:event.target[3].value,
            foto:event.target[4].value,
            /* pais:event.target[5].value, */
            pais:estadoPais,
            from:"form-Signup"
        }
        
        dispatch(registrarUsuario(userData))
        
    }
    return (
        <>  <div>.</div>
            <p>hola para crearte un usaurio seleciona un pais para poder poder iniciar sesion</p>
            <p>🌎 Country</p>
                <select className="form-select form-select-sm selectorPais" aria-label=".form-select-sm example" onChange={(event)=>dispatch(seleccionarUnPais(event.target.value))}>
                           
                            {
                            paises.map((unPais, index)=> <option value= {unPais} key={index} > 
                                
                                {unPais}
                                </option> )
                            }
            </select>
            {!estadoPais || estadoPais === "Select Country"? <p>porfavor elige un pais para poder continuar</p>
            :
            <>
                <p>con que metodo desas crearte una cuenta</p>
                <div className='botonFacebook'>
                <FacebookSignUp />
                </div>
                
               
                <form onSubmit={handleSubmit} className="flex">
                    <div className="factorComun mailMasNombre">
                        <div>
                            <label htmlFor="nombre">name</label>
                            <input type="text" id="nombre" name="nombre"/>
                        </div>
                        <div>
                            <label htmlFor="apellido">lastName</label>
                            <input type="text" id="apellido" name="apellido"/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email"/>
                        </div>   
                    </div>

                    <div className="factorComun mailMasNombre">
                        <div>
                            <label htmlFor="contrasenia">password</label>
                            <input type="password" id="contrasenia" name="contrasenia"/>
                        </div>
                    </div>

                    <div className="factorComun mailMasNombre">
                        <div>
                            <label htmlFor="foto">Photo</label>
                            <input type="text" id="foto" name="foto"/>
                        </div>
                    </div>
                    <div className="terminoEnviar"> 
                        <button type="submit" className="inputEnviar">Create new  account</button>
                        
                    </div>
                </form>
                
                {mensaje.length === 1
                ?
                <>  
                <p>{mensaje[0]}</p>
                <div className="as">Have an account? <Link to="/LogIn">SignIn</Link> </div> 
                </>
                :
                <>
                {mensaje.map((error, index) =>
                    <p key={String(index)}>{error}</p>
                )}
                <div className="as">Have an account? <Link to="/LogIn">SignIn</Link> </div> 
                </>
                }
                
                    
                
              
                       

            </>
            } 
        </>
    );
}
 
export default SignUp;

