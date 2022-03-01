import axios from 'axios';

const cargarCiudad = async (inputNuevoDato) => {
    try{
        let unaCiudad = await axios.post(`http://localhost:4000/api/ciudades`,{inputNuevoDato})
        return unaCiudad
    }
    catch(error){
        throw error
    }
}
 
export default cargarCiudad;

const eliminarCiudad = async (id) => {
    try{
        let unaCiudad = await axios.delete(`http://localhost:4000/api/ciudades/${id}`)
        return unaCiudad
    }
    catch(error){
        throw error
    }
}
 
export default eliminarCiudad;

const actualizarCiudad = async (id, actualCiudad) => {
    try{
        let unaCiudad = await axios.put(`http://localhost:4000/api/ciudades/${id}`,{actualCiudad} )
        return unaCiudad
    }
    catch(error){
        throw error
    }
}
 
export default actualizarCiudad;

const obtenerCiudadID = async(id) =>{
    try{
        let unaCiudad = await axios.get(`http://localhost:4000/api/ciudades/${id}` )
        return unaCiudad
    }
    catch(error){
        throw error
    }
}
export default obtenerCiudadID