import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_BOOK, GET_BOOKS } from "./Queries/book";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getBooks: GET_BOOKS,
    getBook: GET_BOOK,
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
