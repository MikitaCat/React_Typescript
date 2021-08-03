import React from 'react';
import { Itodo } from '../interfases';

type ToDoListProps = {
  todos: Itodo[];
};

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        //Dynamic Styles :))))
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li key={todo.id} className={classes.join(' ')}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              <span>{todo.title}</span>
              <i className="material-icons red-text">delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
