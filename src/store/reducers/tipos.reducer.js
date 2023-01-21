import { TIPOS } from '../../data/Tipos';
import { SELECTED_TIPO } from './../actions/tipo.actions';

const initialState = {
    tipos: TIPOS,
    selected: null
}

const TipoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_TIPO:
            const IndexTipo = state.tipos.findIndex(
                (cat) => cat.id === action.tipoSelectingId);
            if (IndexTipo === -1) return state;
            return { ...state, selected: state.tipos[IndexTipo] }
        default:
            return state
    }
}

export default TipoReducer
