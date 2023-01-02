import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import TipoReducer from './reducers/tipos.reducer';
import TareaReducer from './reducers/tareas.reducer';

const RootReducer = combineReducers({
    tipos: TipoReducer,
    tareas: TareaReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));
