import React, {Fragment} from 'react'  /* imr */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/home'
import Cities from './Cities/cities'
import Header from './Home/aHeader/Header'

/* sfc */
function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/cities' element={<Cities/>}/>
              <Route path='/*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
      
    </Fragment>
    
  );
}

export default App;

