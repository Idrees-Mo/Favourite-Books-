import React, { useState } from "react";
import { useDeleteBook } from "../../common/hooks/books/useDeleteBook";
import { useGetBooks } from "../../common/hooks/books/useGetBooks";
import { Book } from "../../common/interfaces/book.interface";
import BookItem from "../book/Book.component";
import Modal from "../bookModal/bookModal.component";
import { Container, Wraper } from "./books.style";

const BooksList: React.FC = () => {
  const books: Book[] | undefined = useGetBooks();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Wraper>
      {showModal && <Modal book={selectedBook} modal={setShowModal} />}
      <Container>
        {books &&
          books.map((book) => (
            <div>
              <BookItem
                key={book.id}
                book={book}
                modal={setShowModal}
                selectBook={setSelectedBook}
              />
            </div>
          ))}
      </Container>
    </Wraper>
  );
};

export default BooksList;
