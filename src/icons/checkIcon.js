import React from 'react';
import { HiBolt } from "react-icons/hi2";

function CheckIcon({ completed, onClick }) {
  return ( 
    <HiBolt
      className={`Icon Icon-check 
      ${completed && "Icon-check--active"}`}
      onClick={onClick}
    />
  )
}

export { CheckIcon };
