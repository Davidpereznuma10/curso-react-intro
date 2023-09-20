import{TodoCounter}from '../TodoCounter';
import{TodoSearch}from '../TodoSearch';
import{TodoList}from '../TodoList';
import{TodoItem}from '../TodoItem';
import{CreateTodoButton}from '../CreateTodoButton';
function AppUI({ loading, error,completedTodos,totalTodos,searchValue,setSearchValue,searchedTodos,check,deleteTodo,}){
    
    return(
    <>
        <TodoCounter
            completed={completedTodos}
            total={totalTodos}/>
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}/>
            <TodoList>
                 {loading && <p>Cargando...</p>}
                {error && <p>Hubo un error!!</p>}
                {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}
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
