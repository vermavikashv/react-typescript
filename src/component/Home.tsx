import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputfield from "../components/Inputfield";
import { Todo } from "../modal";
import Todolist from "../components/Todolist";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-300 ">
        <div className=" text-3xl flex flex-col justify-center items-center text-slate-700">
          Taskify
        </div>
        <div>
          {" "}
          <Inputfield todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>{" "}
        <Todolist todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <button
          className="text-blue-500"
          onClick={() => navigate("/learntype")}
        >
          Go to Learn
        </button>{" "}
        <br />
        <button className="text-blue-500" onClick={() => navigate("/newhome")}>
          New Home
        </button>{" "}
        <br />
        <button className="text-blue-500" onClick={() => navigate("/redux")}>
          Redux
        </button>{" "}
      </div>
    </>
  );
};
export default Home;
