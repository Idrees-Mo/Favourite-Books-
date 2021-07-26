import React from "react";
import { Book } from "../../common/interfaces/book.interface";

import { Author, Container, Cover } from "./Book.style";
interface IProps {
  book: Book;
}

const BookItem: React.FC<IProps> = ({ book }) => {
  const { title, id, cover_url, author } = book;
  return (
    <Container>
      <Cover style={{ backgroundImage: `url(${cover_url})` }}></Cover>
      <Author>{author?.name}</Author>
    </Container>
  );
};

export default BookItem;
