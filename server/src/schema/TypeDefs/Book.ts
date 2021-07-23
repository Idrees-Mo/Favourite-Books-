import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const BookType = new GraphQLObjectType({
  name: "Book",
  description: "Book Type",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    cover_url: { type: GraphQLString },
    authId: { type: GraphQLID },
  }),
});
