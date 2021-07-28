import { ApolloClient, InMemoryCache } from "@apollo/client";
// use localhost for local environment //
const client = new ApolloClient({
  uri: "https://favourite-books-app.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
