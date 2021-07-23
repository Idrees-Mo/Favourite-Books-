import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const Author = new GraphQLObjectType({
  name: "Author",
  description: "Author Type",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    photo_url: { type: GraphQLString },
  }),
});
