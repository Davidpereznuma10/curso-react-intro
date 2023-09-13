function TodoItem({ text, completed }){
    return(<li>
                 <span>{completed? '✔': 'X'}</span>
                 <p>{text}</p>
            </li>
    );
}
export{TodoItem};