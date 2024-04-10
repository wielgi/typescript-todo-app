import React, { useState } from "react";

import { Todo } from "@/types";

const AddTaskForm: React.FC<{ todos: Todo[] }> = () => {
  const [task, setTask] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    // Add your logic here to handle adding the task
    console.log("Task:", task);
    setTask("");
  };

  return (
    <div className="flex w-full p-5">
      <input
        className="w-full h-[50px] rounded-l-2xl"
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
    </div>
  );
};

export default AddTaskForm;
