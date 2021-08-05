import React, { useState } from "react";
import {
  GET_AUTHORS,
  useGetAuthors,
} from "../../common/hooks/authors/useGetAuthors";
import { useCreateAuthor } from "../../common/hooks/authors/userCreateAuthor";
import { useCreateBook } from "../../common/hooks/books/useCreateBook";
import { GET_BOOKS } from "../../common/hooks/books/useGetBooks";
import { Background, Container } from "../bookModal/bookModal.style";
import { Form, Title } from "./BookForm.style";

interface IProps {
  show: Function;
}

const BookForm: React.FC<IProps> = ({ show }) => {
  const createBook = useCreateBook();
  const createAuthor = useCreateAuthor();
  const getAuthors = useGetAuthors();
  const [title, setTitle] = useState("");
  const [cover_url, setCoverUrl] = useState("");
  const [authId, setAuthId] = useState("");

  const [name, setName] = useState("");
  const [photo_url, setPhotoUrl] = useState("");

  const [authForm, setAuthorForm] = useState(false);

  console.log(getAuthors);
  const onBookSubmit = (e: any) => {
    e.preventDefault();
    if (title === "") {
      return alert("Book Title is required");
    }
    createBook({
      variables: {
        title,
        cover_url,
        authId,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
    setTitle("");
    setAuthId("");
    setCoverUrl("");
    show();
  };
  const onAuthorSubmit = (e: any) => {
    e.preventDefault();
    if (name === "") {
      return alert("Author name is required");
    }
    createAuthor({
      variables: {
        name,
        photo_url,
      },
      refetchQueries: [{ query: GET_AUTHORS }],
    });
    setName("");
    setPhotoUrl("");
    setAuthorForm(false);
    show();
  };
  //Form for Add Author
  const AuthForm = (
    <Form onSubmit={onAuthorSubmit}>
      <Title>Add New Author</Title>
      <label htmlFor="name">Author Name :</label>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Author Name *"
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="photo_url">Photo URL :</label>
      <input
        type="text"
        name="photo_url"
        value={photo_url}
        placeholder="Author Photo URL"
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <div className="BtnGroup">
        <button className="cancel" onClick={() => show()}>
          Cancel
        </button>
        <button type="submit">Add Author</button>
      </div>
    </Form>
  );
  // Form for Add Book
  const BookForm = (
    <Form onSubmit={onBookSubmit}>
      <Title>Add New Book</Title>
      <label htmlFor="title">Book Title :</label>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Book Title *"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="cover_url">Book Cover URL :</label>
      <input
        type="text"
        name="cover_url"
        value={cover_url}
        placeholder="Book Cover URL"
        onChange={(e) => setCoverUrl(e.target.value)}
      />
      <label htmlFor="author">Select Author:</label>
      <select name="author" onChange={(e) => setAuthId(e.target.value)}>
        {getAuthors &&
          getAuthors.map((Author) => {
            return (
              <option key={Author.id} value={Author.id}>
                {Author.name}
              </option>
            );
          })}
      </select>
      <div className="BtnGroup">
        <button className="cancel" onClick={() => show()}>
          Cancel
        </button>
        <button onClick={() => setAuthorForm(true)}>Add New Author</button>
        <button type="submit">Add Book</button>
      </div>
    </Form>
  );

  return (
    <Background>
      <Container>{authForm ? AuthForm : BookForm}</Container>
    </Background>
  );
};

export default BookForm;
