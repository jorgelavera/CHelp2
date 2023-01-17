export const SELECT_TAREA = 'SELECT_TAREA';
export const FILTERED_TAREA = 'FILTERED_TAREA';

export const selectTarea = (id) => ({
    type: SELECT_TAREA,
    tareaSelectingId: id
});

export const filteredTarea = (id) => ({
    type: FILTERED_TAREA,
    tipoFilteringId: id
});
