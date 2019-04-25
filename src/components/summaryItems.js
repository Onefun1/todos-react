import React from "react";

const summaryItems = props => {
  return (
    <div class="bottom">
      <span> Total: {props.count} item(s)</span>
      <button onClick={() => props.setDefault("all")}>all</button>
      <button onClick={() => props.setDefault("active")}>active</button>
      <button onClick={() => props.setDefault("archive")}>archive</button>
      <span> Done: {props.checkedCount} item(s)</span>
    </div>
  );
};

export default summaryItems;
