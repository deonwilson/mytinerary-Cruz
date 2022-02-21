import React, {Fragment} from 'react'  /* imr */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home/home'
import Cities from './Cities/cities'

/* sfc */
function App() {
  return (
    <Fragment>
        <BrowserRouter>
            <Routes>
              <Route path='/*' element={<Home/>}/>
              <Route path='/cities' element={<Cities/>}/>
            </Routes>
        </BrowserRouter>
      
    </Fragment>
    
  );
}

export default App;

