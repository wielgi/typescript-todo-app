import React, { forwardRef } from "react";

import { Todo } from "@/types";

const TodoElement = forwardRef<
  HTMLDivElement,
  { onClick: () => void; todo: Todo }
>(({ onClick, todo: { task, completed } }, ref) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className="flex items-center justify-between w-full p-4 my-2 bg-gradient-to-r from-purple-900 to-purple-400 rounded-lg"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-4 h-8 w-8 rounded-md border-2 border-gray-300 cursor-pointer focus:outline-none transition duration-200 ease-in-out"
          checked={completed}
          onChange={() => {
            // update the todo.completed state
          }}
        />
        <p className={completed ? "line-through" : ""}>{task}</p>
      </div>
    </div>
  );
});

TodoElement.displayName = "TodoElement";

export default TodoElement;
