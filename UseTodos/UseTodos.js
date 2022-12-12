import { useEffect } from "react";
import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoreducer";


const initialState = [];
const init = () =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const UseTodos = () =>{

const [todos, dispatch] = useReducer(todoReducer, initialState,init);
  //guardar localStorage, cuando cambie el todos
  useEffect(() => {
   localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = (todo) => {
  const action ={
    type:'[TODO] Add Todo',
    payload: todo
  }
dispatch(action); //envio la accion al reducer
  };

  const HandleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    });

  }
 
  const HandleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    });

  }

  
            
    return {
        todos,
        handleNewTodo,
        todosCount: todos.length,
        Pendientes: todos.filter(todo => !todo.done).length,
        HandleDeleteTodo,
        HandleToggleTodo,
    }


}