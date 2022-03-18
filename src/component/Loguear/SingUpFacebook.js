import React from 'react';
import FacebookLogin from 'react-facebook-login';

import {registrarUsuario} from '../../redux/usuarios/usuarios';
import { useDispatch, useSelector } from 'react-redux';
/* import './styleSign.css' */

function FacebookSignUp() {
  const dispatch = useDispatch()
  const estadoPais = useSelector(state => state.usuarioMain.unPais)
  console.log(estadoPais)
  const responseFacebook = async (res) => {
    
    const userData={
        nombre:res.name.split(" ")[0],
        apellido:res.name.split(" ").pop(),
        email:res.email,
        contrasenia:res.id,
        foto:res.picture.data.url,
        pais:estadoPais,
        from:"facebook"
    }
    await dispatch(registrarUsuario(userData))
    console.log(userData.pais)
  }
  

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" SignUp with Facebook"
      appId="509763010866283"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}

export default FacebookSignUp