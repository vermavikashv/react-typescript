import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState<string>(""); // Type annotation for state
  const dispatch = useDispatch(); // Type inference for dispatch

  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input)); // Dispatch the action with input as the payload
      setInput(""); // Clear the input field
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <form onSubmit={addTodoHandler} className="space-x-3 ">
        <input
          type="text"
          className="bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)} // Update state on input change
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
