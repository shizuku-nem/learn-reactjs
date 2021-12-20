import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classnames from "classnames";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoClick = (todo, index) => {
    console.log("w:");
    if (!onTodoClick) return;
    onTodoClick(todo, index);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoClick(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

// 2 cach khai bao props
// (1) Dùng khi ít props
//          function TodoList({todoList}) {
// (2) Khi nhiều props:
//          function TodoList(props) {
//              const {todoList} = props;

export default TodoList;
