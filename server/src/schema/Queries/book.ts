import { GraphQLID, GraphQLList } from "graphql";
import { BookType } from "../TypeDefs/Book";

import { data } from "../../data";
const { books } = data;

export const GET_BOOKS = {
  type: GraphQLList(BookType),
  resolve() {
    // @todo - get books from mongoDB
    return books;
  },
};

export const GET_BOOK = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  // @todo - get book from mongoDB
  resolve: (parent: any, args: any) => books.find((b) => b.id == args.id),
};
