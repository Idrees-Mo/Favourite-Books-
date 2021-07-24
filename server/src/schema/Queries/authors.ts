import { GraphQLID, GraphQLList } from "graphql";
import { AuthorType } from "../TypeDefs/Author";
import Author from "../../models/Author";

export const GET_AUTHOR = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: async (parent: any, args: any) => {
    try {
      let author = await Author.findById(args.id);
      return author;
    } catch (err) {
      console.log(err.message);
    }
  },
};

export const GET_AUTHORS = {
  type: GraphQLList(AuthorType),
  resolve: async () => {
    try {
      let authors = await Author.find({});
      return authors;
    } catch (err) {
      console.log(err.message);
    }
  },
};
