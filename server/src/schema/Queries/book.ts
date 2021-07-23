import { GraphQLID, GraphQLList } from "graphql";
import { BookType } from "../TypeDefs/Book";
// todo
//  get mongoDB Book model.
const books = [
  { id: 1, title: "Harry Potter and the Chamber of Secrets", authId: 1 },
  { id: 2, title: "Harry Potter and the Prisoner of Azkaban", authId: 1 },
  { id: 3, title: "Harry Potter and the Goblet of Fire", authId: 1 },
  { id: 4, title: "The Fellowship of the Ring", authId: 2 },
  { id: 5, title: "The Two Towers", authId: 2 },
  { id: 6, title: "The Return of the King", authId: 2 },
  { id: 7, title: "The Way of Shadows", authId: 3 },
  { id: 8, title: "Beyond the Shadows", authId: 3 },
];

export const GET_BOOKS = {
  type: GraphQLList(BookType),
  resolve() {
    // todo
    // will return books from db
    return books;
  },
};

export const GET_BOOK = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  // todo
  // will get book from db
  resolve: (parent: any, args: any) => books.find((b) => b.id == args.id),
};
