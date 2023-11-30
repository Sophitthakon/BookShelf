import { create } from "zustand";
import MockData from "../mockdata/MockData";

type Store = {
  books: Book[];
  delete: (ids: number[]) => void;
};

export const useBookStore = create<Store>()((set) => ({
  books: MockData,
  // inc: () => set((state) => ({ count: state.count + 1 })),
  delete: (ids: number[]) =>
    set((state: Store) => {
      return { books: state.books.filter((book) => !ids.includes(book.id)) };
    }),
}));
