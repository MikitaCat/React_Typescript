import React from 'react';

const ToDoForm: React.FC = () => {
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Task Name..." />
      <label htmlFor="title" className="active">
        Enter The Task Name
      </label>
    </div>
  );
};

export default ToDoForm;
