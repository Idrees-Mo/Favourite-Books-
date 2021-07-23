import { GraphQLObjectType, GraphQLSchema } from "graphql";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {},
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {},
});
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});

export default schema;
