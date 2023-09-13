import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
    {text:'Finished React course', completed: false},
    {text:'Finished Pasport course', completed: true},
    {text:'Finished db course', completed: true},
    {text:'finished my sandwich', completed: true},
]

function App() {
  return (
    <>
        
        <TodoCounter complete={16} total={20} />
        <TodoSearch/>

        <TodoList>
            {defaultTodos.map(todo =>(
                <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}/>
            ))}
        </TodoList>

        <CreateTodoButton/>
       
    </>
  );
};



export default App;
