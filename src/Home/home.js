import React, {Fragment} from 'react';
import Header from './aHeader/Header'
import Main from './bMain/Main'
import Carousel from './cCorousel/carousel'
import Footer from './dFooter/Footer'

const Home = () => {
    return ( 
        <Fragment>
            <Header/>
            <Main/>
            <Carousel/>
            <Footer/>
        </Fragment>
     );
}
 
export default Home;