import {useReducer, useEffect} from 'react';
import { todoReducer } from './todoReducer';

export const useTodos = () => {

    /* const initialState = []; */
    
    const init = () => {
        return JSON.parse(localStorage.getItem('tareas')) || [];
    }

    const [tareas, dispatch] = useReducer(todoReducer, [], init);

    //cuando cambia el estado de tareas agrego al localStorage en esta función
    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas)) //el localStorahe viende directamente con js
    }, [tareas])
    

    const handleNewTodo = (tarea) => {
        //console.log({tarea});

        const action = {
            type: 'ADD_TODO',
            payload: tarea,
        }
        //El dispatch envia la acción
        dispatch(action);

    }

    const handleDeleteTodo = (id) => {
        //console.log({id})
        dispatch({
            type: 'REMOVE_TODO',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        //console.log({id})
        dispatch({
            type: 'TOGGLE_TODO',
            payload: id
        })
    }

  return {
    tareas,
    
    tareasCount: tareas.length,
    pendingTareasCount: tareas.filter(tarea => !tarea.done).length,

    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
