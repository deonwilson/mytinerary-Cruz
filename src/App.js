import React, {Fragment} from 'react'  /* imr */
import Header from './aHeader/Header'
import Main from './bMain/Main'
import Carousel from './cCorousel/carousel'
import Footer from './dFooter/Footer'


/* sfc */
function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Carousel/>
      <Footer/>
    </Fragment>
  );
}

export default App;
