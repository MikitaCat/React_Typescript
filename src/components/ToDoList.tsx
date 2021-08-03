import React from 'react';
import { Itodo } from '../interfases';

type ToDoListProps = {
  todos: Itodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({ todos, onRemove, onToggle }) => {
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
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
