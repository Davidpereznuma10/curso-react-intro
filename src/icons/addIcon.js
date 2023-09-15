import React from "react";
import { HiSparkles } from "react-icons/hi2";

function AddIcon({ onClick }) {
  return (
    <HiSparkles
      className="CreateTodoButton"
      onClick={onClick}
    />
  );
}

export { AddIcon };
