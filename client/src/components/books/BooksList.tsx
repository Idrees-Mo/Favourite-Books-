import React from "react";
import { useDeleteBook } from "../../common/hooks/books/useDeleteBook";
import { GET_BOOKS, useGetBooks } from "../../common/hooks/books/useGetBooks";
import { Book } from "../../common/interfaces/book.interface";

const BooksList: React.FC = () => {
  const books: Book[] | undefined = useGetBooks();
  const removeBook = useDeleteBook();
  return (
    <div>
      <h1>Books List</h1>
      {books &&
        books.map((book) => (
          <div>
            <li key={book.id}>{book.title}</li>

            <button
              onClick={() =>
                removeBook({
                  variables: { id: book.id },
                  refetchQueries: [{ query: GET_BOOKS }],
                })
              }
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
};

export default BooksList;
