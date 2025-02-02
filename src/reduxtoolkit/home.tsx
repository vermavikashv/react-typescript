import React from "react";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

const Home: React.FC = () => {
  return (
    <div className="bg-lime-400 p-8">
      <AddTodo />
      <Todos />
    </div>
  );
};

export default Home;
