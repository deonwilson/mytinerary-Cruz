import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
const Ancor = () => {
    return ( 
        <Fragment>
            
            <nav className='link'>
                <Link to='/home'>Home</Link>
                <Link to='/cities'>Cities</Link>
            </nav>
            
        </Fragment>
     );
}
 
export default Ancor;
