import React, { useState } from 'react';

const ToDoForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      console.log(title);
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Task Name..."
      />
      <label htmlFor="title" className="active">
        Enter The Task Name
      </label>
    </div>
  );
};

export default ToDoForm;
