import React from 'react';
import { Itodo } from '../interfases';

type ToDoListProps = {
  todos: Itodo[];
};

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todo">
            <label>
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <i className="material-icons red-text">Delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
