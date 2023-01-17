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
            console.log('xxxx1 TareaReducer SELECT_TAREA....')
            console.log(action.tipoSelectingId)
            return {
                ...state,
                selected: state.tipos.find(
                    (tarea) => tarea.tipoId === action.tipoSelectingId)
            };
        case FILTERED_TAREA:
            console.log('xxxx2 TareaReducer FILTERED_TAREA....')
//            console.log(state.tareas)
            console.log(action.tipoFilteringId)
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

