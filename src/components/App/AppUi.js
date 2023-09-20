import{TodoCounter}from '../TodoCounter';
import{TodoSearch}from '../TodoSearch';
import{TodoList}from '../TodoList';
import{TodoItem}from '../TodoItem';
import{CreateTodoButton}from '../CreateTodoButton';
function AppUI({completedTodos,totalTodos,searchValue,setSearchValue,searchedTodos,check,deleteTodo,}){
    
    return(
    <>
        <TodoCounter
            completed={completedTodos}
            total={totalTodos}/>
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}/>
            <TodoList>
                {searchedTodos.map(todo=>(
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        check={()=>check(todo.text)}
                        deleteTodo={()=>deleteTodo(todo.text)}/>
                ))}
            </TodoList>
        <CreateTodoButton/>
    </>);
}

export {AppUI};
