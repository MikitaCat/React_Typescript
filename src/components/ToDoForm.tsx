import React, { useState, useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const ToDoForm: React.FC<TodoFormProps> = (props) => {
  // The commented out lines are the writing of handling Input with using useState !!!
  // It works the same !!!
  //   const [title, setTitle] = useState<string>(''); !!!

  //   const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { !!!
  //     setTitle(event.target.value); !!!
  //   }; !!!

  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      //   console.log(title); !!!
      //   setTitle(''); !!!
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler} !!!
        // value={title} !!!
        onKeyPress={keyPressHandler}
        ref={ref}
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
