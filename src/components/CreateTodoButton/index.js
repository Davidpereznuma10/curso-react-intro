import "./Style/index.css";
import { AddIcon } from "./icon/additem";

function CreateTodoButton({ createTodo }) {
  return (
    <>
      <AddIcon 
        onClick={createTodo} />
    </>
  );
}

export { CreateTodoButton };
