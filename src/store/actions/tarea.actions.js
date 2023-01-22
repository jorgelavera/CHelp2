import { URL_API } from "../../constants/Database";

export const SELECT_TAREA = 'SELECT_TAREA';
export const FILTERED_TAREA = 'FILTERED_TAREA';
export const EDIT_TAREA = 'EDIT_TAREA';
export const ADD_TAREA = 'ADD_TAREA';
export const DELETE_TAREA = 'DELETE_TAREA';

export const selectTarea = (id) => ({
    type: SELECT_TAREA,
    tareaSelectingId: id
});

export const filteredTarea = (id) => ({
    type: FILTERED_TAREA,
    tipoFilteringId: id
});

export const editTarea = (payload, tareaID) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ date: Date.now(), items: { ...payload }, user }),
            });

            const result = await response.json();
            console.log(result);
            dispatch({
                type: EDIT_TAREA,
                tareaID,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

export const addTarea = (TareaID) => ({
    type: ADD_TAREA,
    TareaID,
});

export const deleteTarea = (TareaID) => ({
    type: DELETE_TAREA,
    TareaID,
});
