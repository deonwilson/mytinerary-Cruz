import React from 'react';
import './cssHeader/login.css'
import LogoLog from './imgHeader/login.png'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//importaciones internas
import {cerrarSesion} from '../../../redux/usuarios/usuarios'


const Login = () => {
    const usuario = useSelector(state => state.usuarioMain.usuario)
    const dispatch= useDispatch()
    return ( 
            <div className="btn-group dropstart headerLogin">
                <img src ={LogoLog} alt="logoIniciar" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></img>
                <ul className="dropdown-menu">
                    {
                    usuario 
                    ? 
                    <li><Link to='/LogIn' onClick={()=>dispatch(cerrarSesion(usuario.email))}>Sign Out</Link></li>
                    :
                    <>
                        <li><Link to='/LogIn'>Log In</Link></li>
                        <li><Link to='/SignUp'>Sign Up</Link></li>
                    </>
                    }
                </ul>    
            </div>
           
    );
}
export default Login;

