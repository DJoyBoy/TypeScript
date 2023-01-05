import React, { useRef } from "react";

interface TodoFormProp {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProp> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  function keyPreccHanl(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
    }
  }

  return (
    <div className="input-field">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Ведіть інфромацію"
        onKeyPress={keyPreccHanl}
      />
      <label htmlFor="title" className="active">
        Ведіть інфромацію та нажміть Enter
      </label>
    </div>
  );
};
