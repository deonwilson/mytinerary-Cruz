import React, {Fragment} from 'react'  /* imr */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home/home'
import Cities from './component/Cities/cities'
import Header from './component/Home/aHeader/Header'
import AnyCities from './component/anyCiudad/anyCities'
/* import Footer from './Home/dFooter/Footer' */


/* import Footer from './Home/dFooter/Footer' */
//usando redux
import {Provider} from 'react-redux'
import generateStore from './redux/store'

/* sfc */
function App() {
  const store = generateStore()
  return (
    <Fragment>
      <Provider store={store}>

        <BrowserRouter>
            <Header/>
            <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/cities' element={<Cities/>}/>
              <Route path='/cities/:id' element={<AnyCities/>}/>
              <Route path='/*' element={<Home/>}/>
            </Routes>
          {/*   <Footer/> */}
        </BrowserRouter>
        
      </Provider>
    </Fragment>
    
  );
}
export default App;
