import React from "react";
import { useGetBooks } from "../../common/hooks/books/useGetBooks";

const BooksList: React.FC = () => {
  const books = useGetBooks();
  {
    books && console.log(books);
  }
  return <div>BooksList </div>;
};

export default BooksList;
