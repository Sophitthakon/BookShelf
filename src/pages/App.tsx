import { useState } from "react";
import BookCard from "../components/BookCard";
import MockData from "../mockdata/MockData";
import { useBookStore } from "../store/bookStore";
import Corousel from "../components/Corousel";

function App() {
  const { books, delete: deleteBooks } = useBookStore();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [selectedBook, setSelectedBook] = useState<number[]>([]);

  const handleToggleEdit = () => {
    setIsEdit((prev) => !prev);
    setSelectedBook([]);
  };

  const handleSelect = (id: number) => {
    if (!isEdit) return;
    if (selectedBook.includes(id)) {
      const filtered = selectedBook.filter((b) => b != id);
      setSelectedBook(filtered);
    } else {
      setSelectedBook((prev) => [...prev, id]);
    }
  };

  const handleSubmit = () => {
    deleteBooks(selectedBook);
    setIsEdit(false);
    setSelectedBook([]);
  };
  return (
    <>
      <div className="pb-10">
        <Corousel />
      </div>

      <div className="max-w-[1024px] mx-auto mb-5">
        <div>
          <p className="text-xl text-gray-950 font-bold">รายการที่คั่นไว้</p>
        </div>
      </div>
      <div className="border-b mb-5" />
      <div className="max-w-[1024px] mx-auto">
        <div className="flex flex-row justify-between items-center mb-6">
          <p className="text-sm text-neutral-400">
            จำนวนทั้งหมด {MockData.length} รายการ
          </p>
          <div>
            {isEdit ? (
              <>
                <button
                  className="rounded-2xl border border-neutral-400 text-gray-950 py-1 px-2 mr-2"
                  onClick={handleToggleEdit}
                >
                  ยกเลิก
                </button>
                <button
                  className="rounded-2xl border border-neutral-400 text-gray-950 py-1 px-2"
                  onClick={handleSubmit}
                >
                  ลบ {selectedBook.length} รายการ
                </button>
              </>
            ) : (
              <button
                className="rounded-2xl border border-neutral-400 text-gray-950 py-1 px-2"
                onClick={handleToggleEdit}
              >
                เเก้ไข
              </button>
            )}
          </div>
        </div>
        <div className="grid gap-2 md:grid-cols-1 xl:grid-cols-3">
          {books.map((data) => {
            return (
              <BookCard
                id={data.id}
                name={data.name}
                currentChapter={data.currentChapter}
                chapterName={data.chapterName}
                bookmarkDate={data.bookmarkDate}
                bookmarkTime={data.bookmarkTime}
                author={data.author}
                picture={data.pictureSource}
                isEdit={isEdit}
                handleSelect={handleSelect}
                selectedBook={selectedBook}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

/* 
<p className="text-red-800">{count}</p>
      <button onClick={inc}> increase </button>
      */
