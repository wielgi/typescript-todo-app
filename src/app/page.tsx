"use client";

import { useState } from "react";

import AddTaskForm from "@/components/AddTaskForm";
import TodoElement from "@/components/Todo";
import Image from "next/image";
import { Todo } from "@/types";
import FlipMove from "react-flip-move";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
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
  ]);

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const changeTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-10 transition ease-in-out">
      <AddTaskForm addTodo={addTodo} />
      <FlipMove className="w-full">
        {todos
          .sort((a, b) =>
            a.completed === b.completed ? b.id - a.id : a.completed ? 1 : -1
          )
          .map((todo) => (
            <TodoElement
              onClick={() => changeTodo(todo.id)}
              key={todo.id}
              todo={todo}
            />
          ))}
      </FlipMove>
    </main>
  );
}
