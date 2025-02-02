import { Todo } from "../modal";
import React from "react";
import Singletodo from "./Singletodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const Todolist: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-center">
      {todos.map((item) => {
        // <li>{item.todo}</li>
        return (
          <Singletodo
            item={item}
            keys={item.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};
export default Todolist;
