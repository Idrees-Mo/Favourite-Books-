import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "../../common/apolloClient";
import BooksList from "../books/BooksList";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        Hello world
        <BooksList />
      </div>
    </ApolloProvider>
  );
};

export default App;
