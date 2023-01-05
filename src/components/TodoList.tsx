import React from "react";
import { ITodo } from "./interface";

type TodoLitProp = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemov: (id: number) => void;
};

export const TodoLit: React.FC<TodoLitProp> = ({
  todos,
  onRemov,
  onToggle,
}) => {
  function remo(event: React.MouseEvent, id: number) {
    event.preventDefault();

    onRemov(id);
  }

  if (todos.length === 0) {
    return <p className="center">Інформація відсутння</p>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        const claccec = ["todo"];
        if (todo.completed) {
          claccec.push("completed");
        }

        return (
          <li className={claccec.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(o) => remo(o, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
