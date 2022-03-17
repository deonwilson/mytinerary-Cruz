import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';

import {iniciarSesion} from '../../redux/usuarios/usuarios'

function FacebookSignIn() {
  const dispatch = useDispatch()
  const responseFacebook = async (res) => {
    console.log(res)
    const logedUser = {
      email: res.email,
      contrasenia: res.id,
      from: "facebook",
      
    }
    await dispatch(iniciarSesion(logedUser))
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" with Facebook"
      appId="880106799435159"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
export default FacebookSignIn