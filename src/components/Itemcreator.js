import React from "react";

class Itemcreator extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.createItem}>
        <input type="text" name="todoItem" />
        <button>Add item</button>
      </form>
    );
  }
}

export default Itemcreator;
