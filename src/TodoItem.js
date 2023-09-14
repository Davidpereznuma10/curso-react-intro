import "./TodoItem.css"
function TodoItem({ text, completed, check, deleteTodo  }){
    return(
        <li className="TodoItem">
                <span
                    className={`Icon Icon-check 
                    ${completed&& "Icon-check--active"}`}
                    onClick={check}
                >V</span>
                <p 
                    className={`TodoItem-p 
                    ${completed && "TodoItem-p--complete"}`}>{text}
                </p>
                <span 
                    className="Icon Icon-delete"
                    onClick={deleteTodo}
                >X</span>
        </li>
    )
}
export{TodoItem};