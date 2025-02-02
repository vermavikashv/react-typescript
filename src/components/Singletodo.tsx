import { Todo } from "../modal";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdDone } from "react-icons/md";
// import Todolist from "./Todolist";

type props = {
  item: Todo;
  keys: number;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Singletodo: React.FC<props> = ({ item, todos, setTodos }: props) => {
  const [Edit, setEdit] = useState<Boolean>(false);
  const [EditTodo, setEditTodo] = useState<string>(item.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: EditTodo } : item))
    );
    setEdit(false);
  };
  return (
    <form
      className="flex items-center rounded-md w-full py-2 px-3 mt-[15px] bg-yellow-500 "
      onSubmit={(e) => handleEdit(e, item.id)}
    >
      {Edit ? (
        <input
          value={EditTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="w-full rounded-full"
        />
      ) : (
        <span className="text-base flex-1 p-2">{item.todo}</span>
      )}
      <div className="flex gap-3">
        <span className="text-xl cursor-pointer">
          <CiEdit
            onClick={() => {
              if (!Edit && !item.isDone) {
                setEdit(!Edit);
              }
            }}
          />
        </span>
        <span className="text-xl cursor-pointer">
          <MdDelete onClick={() => handleDelete(item.id)} />
        </span>
        <span className="text-xl cursor-pointer">
          <MdDone onClick={() => handleDone(item.id)} />
        </span>
      </div>
    </form>
  );
};
export default Singletodo;
