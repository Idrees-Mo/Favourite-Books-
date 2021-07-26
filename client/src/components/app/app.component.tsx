import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../../common/apolloClient";
import BookForm from "../bookForm/BookForm";
import BooksList from "../books/books.component";
import { Main, Container } from "./app.style";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Main>
        <Container>
          <BookForm />
          <BooksList />
        </Container>
      </Main>
    </ApolloProvider>
  );
};

export default App;
