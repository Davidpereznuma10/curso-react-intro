import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text:'Finished React course', completed: false},
  {text:'Finished Pasport course', completed: false},
  {text:'Finished db course', completed: false},
  {text:'Had a sandwich', completed: true},
  {text:'finished my sandwich', completed: true },
]

function App() {
  const [ Todos, setTodos ] = React.useState(defaultTodos)
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
  
  const check = (text)=>{
    const newTodos = [...Todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };
  const deleteTodo = (text)=>{
    const newTodos = [...Todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    )
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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

        <CreateTodoButton/>
       
    </>
  );
};

export default App;
