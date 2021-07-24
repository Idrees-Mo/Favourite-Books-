import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import Author from "../../models/Author";
import { AuthorType } from "./Author";

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
      resolve: async (parent, args) => {
        try {
          const author = await Author.findById(parent.authId);
          return author;
        } catch (err) {
          console.log(err.message);
        }
      },
    },
  }),
});
