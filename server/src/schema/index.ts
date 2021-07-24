import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_AUTHOR, GET_AUTHORS } from "./Queries/authors";
import { GET_BOOK, GET_BOOKS } from "./Queries/book";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getBooks: GET_BOOKS,
    getBook: GET_BOOK,
    getAuthors: GET_AUTHORS,
    getAuthor: GET_AUTHOR,
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {},
});
const schema = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutations,
});

export default schema;
