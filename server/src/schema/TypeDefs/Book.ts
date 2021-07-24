import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { AuthorType } from "./Author";

import { data } from "../../data";
const { authors } = data;

export const BookType = new GraphQLObjectType({
  name: "Book",
  description: "Book Type",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    cover_url: { type: GraphQLString },
    authId: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve: (parent, args) =>
        authors.find((author) => author.id == parent.authId),
    },
  }),
});
