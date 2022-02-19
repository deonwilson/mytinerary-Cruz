import React,{Fragment} from 'react';

const BotonDesplegar = () => {
    return ( 
        <Fragment>
            <button className="navbar-toggler menuHamburguesa" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
            </button>
        </Fragment>
     );
}
 
export default BotonDesplegar;