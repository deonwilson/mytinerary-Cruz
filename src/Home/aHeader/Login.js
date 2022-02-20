import React from 'react';
import './cssHeader/login.css'
import LogoLog from './imgHeader/login.png'
const Login = () => {
    return ( 
           <div className='headerLogin'>
               <img src ={LogoLog} alt="logoIniciar"></img>
           </div> 
    );
}
 
export default Login;