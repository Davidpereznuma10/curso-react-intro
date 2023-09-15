import React from "react";
import "../css/TodoSearch.css"

function TodoSearch({ serchValue, setSerchValue }){
  return(
      <input
      placeholder="Find your ToDo"
      className="TodoSearch"
      value={serchValue}
      onChange={(event)=>{
        setSerchValue(event.target.value)
       }}/>
    )
  };

export { TodoSearch };