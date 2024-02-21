
export const todoReducer = (initialState =[], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            
            //throw new Error('Action.type =ABC no esta implementada');//En caso de haber error
            return [...initialState, action.payload ];
        
        case 'REMOVE_TODO':
            return initialState.filter( tarea => tarea.id !== action.payload );

        case 'TOGGLE_TODO':
            return initialState.map( tarea => {
                if(tarea.id === action.payload){
                    return {
                        ...tarea,
                        done: !tarea.done
                    }
                }
                return tarea
            })
        default:
            return initialState;
    }

}