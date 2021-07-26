import React from "react";
import { useDeleteBook } from "../../common/hooks/books/useDeleteBook";
import { useGetBooks } from "../../common/hooks/books/useGetBooks";
import { Book } from "../../common/interfaces/book.interface";
import BookItem from "../book/Book.component";
import { Container, Header } from "./books.style";

const BooksList: React.FC = () => {
  const books: Book[] | undefined = useGetBooks();
  const removeBook = useDeleteBook();
  return (
    <>
      <Header>
        <h1>My Favourite Books</h1>
      </Header>
      <Container>
        {books &&
          books.map((book) => (
            <div>
              <BookItem key={book.id} book={book} />
            </div>
          ))}
      </Container>
    </>
  );
};

export default BooksList;
