import { TAREAS } from '../../data/Tareas';
import { SELECT_TAREA, FILTERED_TAREA } from './../actions/tarea.actions';

const initialState = {
    tareas: TAREAS,
    filteredTarea: [],
    selected: null
}

const TareaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAREA:
            return {
                ...state,
                selected: state.tipos.find(tarea => tarea.id === action.tareaId)
            }
        case FILTERED_TAREA:
            return {
                ...state,
                filteredTarea: state.tipos.filter(tarea => tarea.tipo === action.tipoId)
            }
        default:
            return state
    }
}

export default TareaReducer
