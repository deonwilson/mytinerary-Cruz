//import jsx
import React,{Fragment} from 'react'; /* imr */
import Login from './Login'
import BotonDesplegar from './botonDesplegar'
//import css
import './cssHeader/navegador.css'
import Ancor from './ancor'


//programa jsx
const Navegador = () => {/* sfc */
    
    return (
        <Fragment>
           <div className='navegador'>    
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-dark p-4">
                            <Ancor/>
                        </div>
                    </div>
                <nav className="navbar navbar-dark bg-dark navegadorIcono">
                    <div className="container-fluid navegadorIcono" >
                        <BotonDesplegar />
                        <Login/>
                    </div>
                </nav>
                
                
            </div>
        </Fragment>
    );
}
 
export default Navegador;