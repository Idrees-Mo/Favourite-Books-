import { GraphQLID, GraphQLList } from "graphql";
import Book from "../../models/Book";
import { BookType } from "../TypeDefs/Book";

export const GET_BOOKS = {
  type: GraphQLList(BookType),
  resolve: async () => {
    try {
      let books = await Book.find({});
      return books;
    } catch (err) {
      console.log(err.message);
    }
  },
};

export const GET_BOOK = {
  type: BookType,
  args: { id: { type: GraphQLID } },

  resolve: async (parent: any, args: any) => {
    try {
      let book = Book.findById(args.id);
      return book;
    } catch (err) {
      console.log(err.message);
    }
  },
};
