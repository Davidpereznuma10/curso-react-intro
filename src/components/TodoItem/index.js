import { DeleteIcon } from "./icons/deleteIcon";
import { CheckIcon } from "./icons/checkIcon";
import "./style/index.css";


function TodoItem({ text, completed, check, deleteTodo  }) {
  return (
    <li className="TodoItem">
      <CheckIcon 
        completed={completed} 
        onClick={check} />
      <p className={`TodoItem-p 
        ${completed && "TodoItem-p--complete"}`}
      >{text}</p>
      <DeleteIcon 
        onClick={deleteTodo}
      />
    </li>
  );
}

export { TodoItem };
