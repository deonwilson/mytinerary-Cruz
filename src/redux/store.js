// mi tienda
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//reducer
import ciudadReducer from './ciudades/ciudades'
import itinerarioReducer from './itinerario/itinerarioReducer'
import usuarioReducer from './usuarios/usuarios'

const rootReducer = combineReducers({
    ciudades: ciudadReducer,
    itinerarioMain: itinerarioReducer,
    usuarioMain:usuarioReducer
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    return store
}