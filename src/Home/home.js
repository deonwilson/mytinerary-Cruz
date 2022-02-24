import React, {Fragment} from 'react';
import Main from './bMain/Main'
import Carousel from './cCorousel/carousel'
import Footer from './dFooter/Footer'

const Home = () => {
    return ( 
        <Fragment>
            
            <Main/>
            <Carousel/>
            <Footer/>
        </Fragment>
     );
}
 
export default Home;