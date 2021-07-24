import { GraphQLNonNull, GraphQLString } from "graphql";
import { AuthorType } from "../TypeDefs/Author";
import Author from "../../models/Author";

export const CREATE_AUTHOR = {
  name: "create author",
  description: "creates a new author",
  type: AuthorType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    photo_url: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (parent: any, args: any) => {
    const author = await new Author(args);
    author.save();
    return author;
  },
};
