import {
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import Book from "../../models/Book";
import { BookType } from "./Book";

export const AuthorType: any = new GraphQLObjectType({
  name: "Author",
  description: "Author Type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photo_url: { type: GraphQLString },
    books: {
      type: GraphQLList(BookType),
      resolve: async (parent, args) => {
        try {
          let books = Book.where({ authId: parent.id });
          return books;
        } catch (err) {
          console.log(err.message);
        }
      },
    },
  }),
});
