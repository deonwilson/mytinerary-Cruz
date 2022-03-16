//importaciones externas
import React, {Fragment} from 'react'  /* imr */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//importaciones internas
import Home from './component/Home/home'
import Cities from './component/Cities/cities'
import Header from './component/Home/aHeader/Header'
import AnyCities from './component/anyCiudad/anyCities'
import Footer from './component/Home/dFooter/Footer'
import LogIn from './component/Loguear/SignIn'
import SignUp from './component/Loguear/SignUp'
import { useSelector } from 'react-redux'




/* sfc */
function App() {
  const usuario = useSelector(state => state.usuarioMain.usuario)
  return (
    <Fragment>
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/cities' element={<Cities/>}/>
              <Route path='/cities/:id' element={<AnyCities/>}/>
              {!usuario && <Route path='/LogIn' element={<LogIn/>}/>}
              {!usuario && <Route path='/SignUp' element={<SignUp/>}/>}
              <Route path='/*' element={<Home/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </Fragment>
    
  );
}
export default App;
