import { GraphQLID, GraphQLList } from "graphql";
import { AuthorType } from "../TypeDefs/Author";
import { data } from "../../data";

const { authors } = data;

export const GET_AUTHOR = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve: (parent: any, args: any) =>
    authors.find((a: any) => a.id == args.id),
  // @todo - get author from mongoDB
};

export const GET_AUTHORS = {
  type: GraphQLList(AuthorType),
  resolve() {
    return authors;
    // @todo - get authors from mongoDB
  },
};
