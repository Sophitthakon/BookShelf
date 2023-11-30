import React from "react";
import { FaList } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

interface BookDetail {
  id: number;
  name: string;
  currentChapter: number;
  chapterName: string;
  bookmarkDate: string;
  bookmarkTime: string;
  author: string;
  picture: string;
  isEdit: boolean;
  handleSelect: (id: number) => void;
  selectedBook: number[];
}
//const src = "https://edit.org/images/cat/book-covers-big-2019101610.jpg";
const BookCard: React.FC<BookDetail> = ({
  id,
  name,
  currentChapter,
  chapterName,
  bookmarkDate,
  bookmarkTime,
  author,
  picture,
  isEdit,
  handleSelect,
  selectedBook,
}) => {
  const isSelected = selectedBook.includes(id);
  return (
    <div
      className="bg-white flex flex-row gap-2 overflow-hidden border-neutral-600 border-[1px] rounded-md cursor-pointer"
      onClick={() => handleSelect(id)}
    >
      <img className="h-full w-32 rounded-lg" src={picture} />

      <div className="w-full p-4">
        <div className="flex flex-row justify-between item-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>

          <div className="my-auto text-lg">
            {isEdit ? (
              isSelected ? (
                <MdRadioButtonChecked />
              ) : (
                <MdRadioButtonUnchecked />
              )
            ) : null}
          </div>
        </div>
        <p className="mt-1 font-light ">{author}</p>
        <p className="mb-3 font-normal text-gray-700flex flex-row items-center gap-2">
          <FaList fontSize="20px" />
          {currentChapter}
          {chapterName}
        </p>
        <p className="mb-3 font-normal text-gray-700flex flex-row items-center gap-2">
          <FaBookmark />
          {bookmarkDate}/{bookmarkTime}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
