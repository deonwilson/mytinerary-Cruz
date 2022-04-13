import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import internas 
import {meGustaNoMegusta} from '../../redux/itinerario/itinerarioReducer'
const LikeDisLike = (props) => {
    const cantidadMg = useSelector(state => state.itinerarioMain.cantidadMg)
    console.log(cantidadMg)
    const dispatch= useDispatch()
    
    const meGusta = () =>{
        dispatch(meGustaNoMegusta(props.id, props.posicion))
    
    }
    
    return (<div className='contenedorMegusta'>
            
                <button className='megustaContenedor'onClick={()=> meGusta()}
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL+ `/meGusta.png`})` }}
                />
                <div className='numero'>
                {cantidadMg[props.posicion]}   
                </div>
             </div>
        
     );
}
 
export default LikeDisLike;