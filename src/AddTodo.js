import React, { useState } from "react";

function AddTodo(props) {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      placeholder="add me..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" && value.trim()) {
          props.handleKeydown(value);
          setValue("");
        }
      }}
    ></input>
  );
}

export default AddTodo;
