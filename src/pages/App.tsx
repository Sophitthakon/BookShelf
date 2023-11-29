import { useBookStore } from "../store/bookStore";

function App() {
  const { count, inc } = useBookStore();
  return (
    <>
      <p className="text-red-800">{count}</p>
      <button onClick={inc}> increase </button>
    </>
  );
}

export default App;
