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
                    <li className='padreAncorLogin'><Link to='/LogIn' onClick={()=>dispatch(cerrarSesion(usuario.email))} className='ancorLogin'>Sign Out</Link></li>
                    :
                    <>
                        <li className='padreAncorLogin'><Link to='/LogIn' className='ancorLogin'>Log In</Link></li>
                        <li className='padreAncorLogin'><Link to='/SignUp' className='ancorLogin' >Sign Up</Link></li>
                    </>
                    }
                </ul>    
            </div>
           
    );
}
export default Login;

