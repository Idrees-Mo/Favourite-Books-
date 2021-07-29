import React, { useState } from "react";
import { useGetBooks } from "../../common/hooks/books/useGetBooks";
import { Book } from "../../common/interfaces/book.interface";
import BookItem from "../book/Book.component";
import Modal from "../bookModal/bookModal.component";
import { Container, Loader, Spiner, Wraper } from "./books.style";

const BooksList: React.FC = () => {
  const { data, loading, error } = useGetBooks();
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <Wraper>
      {showModal && <Modal book={selectedBook} modal={setShowModal} />}
      <Container>
        {loading ? (
          <Loader>
            <Spiner />
          </Loader>
        ) : error ? (
          <div>Sorry, something went wrong </div>
        ) : (
          data &&
          data.getBooks.map((book: Book) => (
            <div>
              <BookItem
                key={book.id}
                book={book}
                modal={setShowModal}
                selectBook={setSelectedBook}
              />
            </div>
          ))
        )}
      </Container>
    </Wraper>
  );
};

export default BooksList;
