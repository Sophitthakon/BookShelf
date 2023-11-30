import BookCard from "../components/BookCard";
//import { useBookStore } from "../store/bookStore";

function App() {
  //const { count, inc } = useBookStore();
  return (
    <>
      <div>
        <h1>รายการที่คั่นไว้</h1>
      </div>

      <div>
        <BookCard />
      </div>
    </>
  );
}

export default App;

/* 
<p className="text-red-800">{count}</p>
      <button onClick={inc}> increase </button>
      */
