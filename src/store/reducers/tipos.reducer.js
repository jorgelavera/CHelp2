import { TIPOS } from '../../data/Tipos';
import { SELECT_TIPO } from './../actions/tipo.actions';


const initialState = {
    tipos: TIPOS,
    selected: null
}

const TipoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TIPO:
            const IndexTipo = state.tipos.findIndex(cat => cat.id === action.tipoId);
            if (IndexTipo === -1) return state;
            return { ...state, selected: state.tipos[indexTipo] }
        default:
            return state
    }
}

export default TipoReducer
