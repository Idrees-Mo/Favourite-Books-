import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { BookType } from "./Book";

// hardcoded test data
import { data } from "../../data";
const { books } = data;

export const AuthorType: any = new GraphQLObjectType({
  name: "Author",
  description: "Author Type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photo_url: { type: GraphQLString },
    books: {
      type: GraphQLList(BookType),
      resolve: (parent, args) =>
        books.filter((book) => book.authId == parent.id),
    },
  }),
});
