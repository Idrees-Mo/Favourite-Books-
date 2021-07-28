import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import client from "../../common/apolloClient";
import BookForm from "../bookForm/BookForm";
import BooksList from "../books/books.component";
import Navbar from "../navbar/navbar.component";
import { Main, Container } from "./app.style";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  //show form to add book/author
  const handle = () => {
    setShowForm(false);
  };
  return (
    <ApolloProvider client={client}>
      <Main>
        <Navbar showAddForm={setShowForm} />
        <Container>
          {showForm && <BookForm show={handle} />}
          <BooksList />
        </Container>
      </Main>
    </ApolloProvider>
  );
};

export default App;
