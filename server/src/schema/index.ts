import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_AUTHOR, REMOVE_AUTHOR } from "./Mutations/author";
import { CREATE_BOOK, REMOVE_BOOK, UPDATE_BOOK } from "./Mutations/book";
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
  fields: {
    createAuthor: CREATE_AUTHOR,
    createBook: CREATE_BOOK,
    removeAuthor: REMOVE_AUTHOR,
    removeBook: REMOVE_BOOK,
    updateBook: UPDATE_BOOK,
  },
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

export default schema;
