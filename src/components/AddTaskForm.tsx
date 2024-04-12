import React, { useState } from "react";

import { Todo } from "@/types";

const AddTaskForm: React.FC<{ addTodo: (task: string) => void }> = ({
  addTodo,
}) => {
  const [task, setTask] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = (event: React.FormEvent) => {
    event.preventDefault();
    // check if the task is empty
    if (!task.trim()) {
      return;
    }
    // Add your logic here to handle adding the task
    console.log("Task:", task);
    addTodo(task);
    setTask("");

    // focus on input after adding task
    const input = document.querySelector(".newTaskForm") as HTMLInputElement;
    input?.focus();
  };

  return (
    <div className="flex w-full p-5">
      <form onSubmit={handleAddTask} className="flex w-full">
        <input
          className="newTaskForm w-full h-[50px] rounded-l-2xl text-[#1b1b3a]"
          type="text"
          value={task}
          onChange={handleInputChange}
        />
        <button
          className="bg-teal-500 h-[50px] w-20 rounded-r-2xl"
          onClick={handleAddTask}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
