import React from 'react';

type ToDoListProps = {
  todos: any[];
};

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className="todo">
            <label>
              <input type="checkbox" />
              <span></span>
              <i className="material-icons red-text">Delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
