import React from "react";
import { Book } from "../../common/interfaces/book.interface";

import { Author, Container, Cover } from "./Book.style";
interface IProps {
  book: Book;
  modal: Function;
  selectBook: Function;
}

const BookItem: React.FC<IProps> = ({ book, modal, selectBook }) => {
  const { title, id, cover_url, author } = book;
  const handleSelect = () => {
    selectBook(book);
    modal(true);
  };
  return (
    <Container onClick={handleSelect}>
      <Cover style={{ backgroundImage: `url(${cover_url})` }}></Cover>
      <Author>{author?.name}</Author>
    </Container>
  );
};

export default BookItem;
