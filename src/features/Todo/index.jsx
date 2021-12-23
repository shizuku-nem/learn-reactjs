import React, { useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Drink",
      status: "completed",
    },
    {
      id: 3,
      title: "Sleep",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoClick = (todo, index) => {
    // clone current array to the new one
    const newTodoList = [...todoList];

    // toggle state & update todoList
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };

    // update todoList
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilteredStatus("all");
  };
  const handleShowNewClick = () => {
    setFilteredStatus("new");
  };
  const handleShowCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const renderedTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || todo.status === filteredStatus
  );

  const handleTodoFormSubmit = (values) => {
    // console.log('values:', values)
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new'
    }

    const newTodoList = [...todoList, newTodo]
    setTodoList(newTodoList);
  }

  return (
    <div>
      <h3>What to do?</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h2>Todo List</h2>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick}></TodoList>
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowNewClick}>Show New</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;
