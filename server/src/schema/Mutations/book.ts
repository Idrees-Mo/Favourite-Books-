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

export const REMOVE_BOOK = {
  type: BookType,
  args: { id: { type: GraphQLNonNull(GraphQLID) } },
  resolve: async (parent: any, args: any) => {
    try {
      let book = await Book.findByIdAndRemove(args.id);
      return book;
    } catch (err) {
      console.log(err.message);
    }
  },
};

export const UPDATE_BOOK = {
  type: BookType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    title: { type: GraphQLNonNull(GraphQLString) },
    cover_url: { type: GraphQLNonNull(GraphQLString) },
    authId: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent: any, args: any) => {
    try {
      let book = await Book.findByIdAndUpdate(args.id, {
        id: args.id,
        title: args.title,
        cover_url: args.cover_url,
        authId: args.authId,
      });
      return book;
    } catch (err) {
      console.log(err.message);
    }
  },
};
