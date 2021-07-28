import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import client from "../../common/apolloClient";
import BookForm from "../bookForm/BookForm";
import BooksList from "../books/books.component";
import { Main, Container } from "./app.style";

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const handle = () => {
    setShowForm(false);
  };
  return (
    <ApolloProvider client={client}>
      <Main>
        <button onClick={() => setShowForm(true)}>+</button>
        <Container>
          {showForm && <BookForm show={handle} />}
          <BooksList />
        </Container>
      </Main>
    </ApolloProvider>
  );
};

export default App;
