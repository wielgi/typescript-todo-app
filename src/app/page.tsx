"use client";

import AddTaskForm from "@/components/AddTaskForm";
import TodoElement from "@/components/Todo";
import Image from "next/image";

export default function Home() {
  // array of todo tasks to be displayed
  const todos = [
    {
      id: 1,
      task: "Task 1",
      completed: false,
    },
    {
      id: 2,
      task: "Task 2",
      completed: false,
    },
    {
      id: 3,
      task: "Task 3",
      completed: false,
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <AddTaskForm todos={todos} />
      {todos.map((todo) => (
        <TodoElement key={todo.id} todo={todo} />
      ))}
    </main>
  );
}
