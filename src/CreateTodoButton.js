import "./CreateTodoButton.css"
function CreateTodoButton(){
    return(
        <button className="CreateTodoButton" 
        onClick={
            ()=>{ console.log('Click on the button');

        }
        }
        >+</button>
    )
}

export { CreateTodoButton }