import React from 'react';
import TodosList from "./todosList.js";
import Todoitem from "./components/Todoitem.js";
import Itemcreator from "./components/Itemcreator";
import SummaryItems from "./components/summaryItems.js";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: TodosList,
      default: "all"
    };
    this.checkedItem = this.checkedItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.setDefault = this.setDefault.bind(this);
    // this.getCheckedCount = this.getCheckedCount.bind(this)
  }
  checkedItem(todoId) {
    this.setState(pervState => {
      const newTodosList = pervState.todos.map(todo => {
        if (todo.todoId === todoId) {
          todo.todoStatus = todo.todoStatus ? false : true;
        }
        return todo;
      });
      return {
        todos: newTodosList
      };
    });
  }

  createItem = async event => {
    event.preventDefault();
    const target = event.target;
    const todoText = target.elements.todoItem.value;
    if (todoText.length > 0) {
      target.elements.todoItem.value = "";
      const nextId = this.state.todos.length;
      this.setState({
        todos: this.state.todos.concat({
          todoId: nextId + 1,
          todoText: todoText,
          todoChecked: false
        })
      });
    }
  };

  removeItem(todoId) {
    this.setState(promState => {
      let newTodos = [];
      for (let key in promState.todos) {
        if (promState.todos[key].todoId !== todoId) {
          newTodos.push(promState.todos[key]);
        }
      }
      return {
        todos: newTodos
      };
    });
  }

  getCheckedCount() {
    var count = 0;
    for (let x in this.state.todos) {
      if (this.state.todos[x].todoStatus) {
        count++;
      }
    }

    return count;
  }

  setDefault(value) {
    this.setState(promState => {
      return {
        default: value
      };
    });
  }

  render() {
    // const todoItems = this.state.todos.map(todo => (
    //   <Todoitem
    //     key={todo.todoId}
    //     todos={todo}
    //     checkedItem={this.checkedItem}
    //     removeItem={this.removeItem}
    //   />
    // ));

    var todoItems = [];

    for (let x in this.state.todos) {
      if (this.state.default === "all") {
        todoItems.push(
          <Todoitem
            key={this.state.todos[x].todoId}
            prom={this.state.todos[x]}
            checkedItem={this.checkedItem}
            removeItem={this.removeItem}
          />
        );
      } else if (
        this.state.default === "active" &&
        !this.state.todos[x].todoStatus
      ) {
        todoItems.push(
          <Todoitem
            key={this.state.todos[x].todoId}
            prom={this.state.todos[x]}
            checkedItem={this.checkedItem}
            removeItem={this.removeItem}
          />
        );
      } else if (
        this.state.default === "archive" &&
        this.state.todos[x].todoStatus
      ) {
        todoItems.push(
          <Todoitem
            key={this.state.todos[x].todoId}
            prom={this.state.todos[x]}
            checkedItem={this.checkedItem}
            removeItem={this.removeItem}
          />
        );
      }
    }

    return (
      <div>
        <h1>todos</h1>
        <Itemcreator createItem={this.createItem} />
        {todoItems}
        <SummaryItems
          count={this.state.todos.length}
          checkedCount={this.getCheckedCount()}
          setDefault={this.setDefault}
        />
      </div>
    );
  }
}

export default App;

