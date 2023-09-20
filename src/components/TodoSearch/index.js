import React from "react";
import "./style/index.css"

function TodoSearch({ searchValue, setSearchValue }){
  return(
      <input
      placeholder="Find your ToDo"
      className="TodoSearch"
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
       }}/>
    )
  };

export { TodoSearch };