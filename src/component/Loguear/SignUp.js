//importaciones externas
import React from 'react';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//importaciones internas (logica)
import {registrarUsuario} from '../../redux/usuarios/usuarios'
//importaciones internas (foto, datos, hoja de estilos, etc)
import './cssLoguear/form.css'

const paises=["Argentina", "Brasil", "Spain", "Germany", "Italy", "Japan", "japan", "France"]

const SignUp = () => {
    const dispatch = useDispatch()
    const mensaje = useSelector(state => state.usuarioMain)
    
    console.log(mensaje)
    
    const handleSubmit = (event) => {
        event.preventDefault()
       
        const userData={
            nombre:event.target[0].value,
            apellido:event.target[1].value,
            email:event.target[2].value,
            contrasenia:event.target[3].value,
            foto:event.target[4].value,
            pais:event.target[5].value,
            from:"form-Signup"
        }
        dispatch(registrarUsuario(userData))
        
    }
    
    return (
        <>  <div>.</div>   
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
                    <div>
                        <label htmlFor="selectCountry">🌎 Country</label>
                        <select className="form-select form-select-sm selectorPais" aria-label=".form-select-sm example">
                            <option >Select Country</option>
                            {
                            paises.map((unPais, index)=> <option value= {unPais} key={index}> {unPais}</option> )
                            }
                            
                        </select>
                    </div>
                    
                         
                </div>
                <div className="terminoEnviar">
                    <button type="submit" className="inputEnviar">Create new  account</button>
                </div>
            </form>

            <div className="">Have an account? <Link to="/LogIn">SignIn</Link> </div>  
        </>
        

     );
}
 
export default SignUp;

