import {UseLocalStorage} from './UseLocalStorage'
import React from 'react';
import{ AppUI }from './AppUi';

function App(){
  const[todos,saveTodos]=UseLocalStorage('Todo_v1',[]);
  const[searchValue,setSearchValue]=React.useState('');
  const completedTodos=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;
  const searchedTodos=todos.filter((todo)=>{
    const todoText=todo.text.toLowerCase();
    const searchText=searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  const completeTodo=(text)=>{const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  };
  const deleteTodo=(text)=>{const newTodos=[...todos];
    const todoIndex=newTodos.findIndex((todo)=>todo.text===text);
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };
  return(
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}
  export default App;
