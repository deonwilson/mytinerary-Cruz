import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import internas 
import {meGustaNoMegusta} from '../../redux/itinerario/itinerarioReducer'
const LikeDisLike = (props) => {
    const cantidadMg = useSelector(state => state.itinerarioMain.cantidadMg)
   
    const dispatch= useDispatch()
    
    const meGusta = () =>{
        dispatch(meGustaNoMegusta(props.id, props.posicion))
    }
    
    return (
        <button className='meGusta'onClick={()=> meGusta()}>{cantidadMg[props.posicion]}👍</button>
     );
}
 
export default LikeDisLike;