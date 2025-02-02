import React from "react";
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const Inputfield: React.FC<props> = ({ todo, setTodo, handleAdd }: props) => {
  return (
    <form
      className="w-11/12 mx-auto flex relative items-center"
      onSubmit={handleAdd}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="input"
        placeholder="Enter a task"
        className="w-full rounded-full p-3 text-2xl m-2 shadow-black focus:outline-none focus:shadow-2xl"
      />
      <button
        type="submit"
        className="absolute rounded-full w-24 h-10 right-4 top-50 bg-red-500 text-white font-bold"
      >
        Go
      </button>
    </form>
  );
};
export default Inputfield;
