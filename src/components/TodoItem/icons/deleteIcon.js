import React from "react";
import { HiFire } from "react-icons/hi2";

function DeleteIcon({onClick }){
    return (
        <HiFire
            className="Icon Icon-delete"
            onClick={onClick}
        />
    )
}
export { DeleteIcon }