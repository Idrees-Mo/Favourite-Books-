import React from "react";
import { Book } from "../../common/interfaces/book.interface";
import {
  Author,
  Background,
  BookItem,
  BookList,
  CloseBtn,
  Container,
  Content,
  Cover,
  Name,
  Photo,
  Title,
  ListTitle,
} from "./bookModal.style";

interface IProps {
  book: Book | null;
  modal: Function;
}

const Modal: React.FC<IProps> = ({ book, modal }) => {
  console.log(book);
  return (
    <Background>
      <Container>
        <Cover>
          <img src={book?.cover_url} />
        </Cover>
        <Content>
          <CloseBtn onClick={() => modal(false)}>X</CloseBtn>
          <Title>{book?.title} </Title>
          <Author>
            <Photo
              style={{ backgroundImage: `url(${book?.author?.photo_url})` }}
            />
            <Name> {book?.author?.name}</Name>
          </Author>
          <ListTitle>Books by this author</ListTitle>
          <BookList>
            {book?.author?.books &&
              book?.author?.books.map((b) => (
                <BookItem
                  key={b.id}
                  style={{ backgroundImage: `url(${b.cover_url})` }}
                />
              ))}
            <BookItem />
          </BookList>
        </Content>
      </Container>
    </Background>
  );
};

export default Modal;
