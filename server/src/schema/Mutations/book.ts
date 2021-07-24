import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import Book from "../../models/Book";
import { BookType } from "../TypeDefs/Book";

export const CREATE_BOOK = {
  type: BookType,
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    cover_url: { type: GraphQLNonNull(GraphQLString) },
    authId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent: any, args: any) => {
    try {
      let book = await Book.create(args);
      book.save();
      return book;
    } catch (err) {
      console.log(err.message);
    }
  },
};
