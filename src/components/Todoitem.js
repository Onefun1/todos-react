import React from "react";

const Todoitem = props => (
  <div className={props.prom.todoStatus ? "todoItem checked" : "todoItem"}>
    <label>
      <input
        type="checkbox"
        key={props.prom.todoId}
        checked={props.prom.todoStatus ? "checked" : ""}
        onChange={() => props.checkedItem(props.prom.todoId)}
      />
      {props.prom.todoText}
    </label>
    <button
      className="remove"
      onClick={() => props.removeItem(props.prom.todoId)}
    >
      x
    </button>
  </div>
);

export default Todoitem;
