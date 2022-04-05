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
    const colorAletorio= ()=>{
        const rojo = Math.floor(Math.random()*256)
        const verde = Math.floor(Math.random()*256)
        const azul = Math.floor(Math.random()*256)
        
       return `rgb(${rojo}, ${verde}, ${azul})`
    }
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
            color:colorAletorio(),
            from:"form-Signup"
        }
        
        dispatch(registrarUsuario(userData))
        
    }
    return (
        <>  <div>.</div>
                
                <select className="form-select form-select-sm selectorPais" aria-label=".form-select-sm example" onChange={(event)=>dispatch(seleccionarUnPais(event.target.value))}>
                      
                            {
                            paises.map((unPais, index)=> <option value= {unPais} key={index} > 
                                
                                {unPais}
                                </option> )
                            }
            </select>
            
            {!estadoPais || estadoPais === "Select Country"? <div className='elegirPais'><p>Please choose your country of residence below</p></div>
            :
            <>
                
                <div className='botonFacebook'>
                <FacebookSignUp />
                </div>
                
                
                <form onSubmit={handleSubmit} className="flex">
                <p>Sign Up for Mytinerary</p>
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
                
                {mensaje[0] === "Ya has realizado tu SignUp de esta forma por favor realiza SignIn" 
                || mensaje[0] === "has already been registered you SignUp, please start SignIn"
                || mensaje.length === 0
                ?
                <div className='bienvenido'>
                <p>{mensaje[0]}😎</p>
                </div>
                :
                <>  
                    <div className='errores'>
                    <h5>Please Correct Errors Before Submitting Form ❗❗😔</h5>
                        {mensaje.map((error, index) =>  <p key={String(index)}> {error} </p> )}
                    </div>
                    
                </>
                }
            </>
            }
            <div className="iniciarSesion">Have an account? <Link to="/LogIn">SignIn</Link> </div> 
        </>
    );
}
 
export default SignUp;

// <div className='bienvenido'><p>{mensaje[0]} 😒</p></div> 