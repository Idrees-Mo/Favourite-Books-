import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../../common/apolloClient";
import BookForm from "../books/BookForm";
import BooksList from "../books/BooksList";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <BookForm />
        <BooksList />
      </div>
    </ApolloProvider>
  );
};

export default App;
