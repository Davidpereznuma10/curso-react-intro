import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import React from 'react';

function App() {
  const localStorageTodos=localStorage.getItem('Todos_v1');
  let parsedTodos;
  if(!localStorageTodos){
    localStorage.setItem('Todos_v1',JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
   }
  const [ Todos, setTodos ] = React.useState(parsedTodos)
  const [ searchValue, setSerchValue ] = React.useState('');

  const completedTodos = Todos.filter(todo => !!todo.completed).length;
  const totalTodo = Todos.length;

  const searchTodos = Todos.filter(
    (todo)=>{
      const  todotext = todo.text.toLowerCase();
      const  search = searchValue.toLowerCase();
      return todotext.includes(search)
    }
  );
  
  const saveTodo = (newTodos)=>{
    localStorage.setItem('Todos_v1', JSON.stringify(newTodos))
    setTodos(newTodos)
  } 
  const check = (text)=>{
    const newTodos = [...Todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    saveTodo(newTodos);
  };
  const deleteTodo = (text)=>{
    const newTodos = [...Todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    saveTodo(newTodos);
  };

  return (
    <>
        
        <TodoCounter 
        completed={completedTodos}
        total={totalTodo} />
        <TodoSearch 
        serchValue= {searchValue}
        setSerchValue = {setSerchValue}/>

        <TodoList>
            {searchTodos.map(todo =>(
                <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                check={()=>check(todo.text)}
                deleteTodo={()=>deleteTodo(todo.text)}
              />
            ))}
        </TodoList>

        <CreateTodoButton
          createTodo={createTodo}
        />
       
    </>
  );
};

export default App;
