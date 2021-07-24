import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
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

export const REMOVE_AUTHOR = {
  name: "remove author",
  description: "removes the author",
  type: AuthorType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
  },
  resolve: async (parent: any, args: any) => {
    try {
      let author = await Author.findByIdAndRemove(args.id);
      return author;
    } catch (err) {
      console.log(err.message);
    }
  },
};
