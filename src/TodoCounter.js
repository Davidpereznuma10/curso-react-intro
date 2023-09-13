import './TodoCounter.css'
function TodoCounter({ completed, total }){
    return(
      <h1 className="TodoCounter">
        You already has finiched <span>{completed}</span> de <span>{total}</span> ToDos
      </h1>
    )
  };
  export { TodoCounter }