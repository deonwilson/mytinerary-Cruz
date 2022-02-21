import React, {Fragment} from 'react';
import Navegador from './Navegador'
import Login from './Login'
import Ancor from './ancor'
import './cssHeader/header.css'
const Header = () => {
    
    return ( 
        <Fragment>
            <header className='headerUno'>
                <Navegador/>
            </header>
            <header className='headerDos'>
                <Ancor/>
                <Login/>
            </header>
        </Fragment>
     );
}
 
export default Header;
