import "../css//CreateTodoButton.css";
import { AddIcon } from "../icons/addIcon";

function CreateTodoButton({ createTodo }) {
  return (
    <>
      <AddIcon 
        onClick={createTodo} />
    </>
  );
}

export { CreateTodoButton };
