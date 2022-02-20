import React, {Fragment} from 'react';
import Navegador from './Navegador'
import './cssHeader/header.css'
const Header = () => {
    
    return ( 
        <Fragment>
            <header className='header'>
                <Navegador/>
            </header>
        </Fragment>
     );
}
 
export default Header;
