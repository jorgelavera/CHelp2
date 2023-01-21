import { TAREAS } from '../../data/Tareas';
import { SELECT_TAREA, FILTERED_TAREA } from './../actions/tarea.actions';

const initialState = {
    tareas: TAREAS,
    filteredTarea: [],
    selected: null,
};

const TareaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAREA:
            return {
                ...state,
                selected: state.tipos.find(
                    (tarea) => tarea.tipoId === action.tipoSelectingId)
            };
        case FILTERED_TAREA:
            return {
                ...state,
                filteredTarea: state.tareas.filter(
                    (tarea) => tarea.tipoId === action.tipoFilteringId)
            };
        default:
            return state;
    }
}

export default TareaReducer;

