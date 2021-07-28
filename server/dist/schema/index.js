"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const author_1 = require("./Mutations/author");
const book_1 = require("./Mutations/book");
const authors_1 = require("./Queries/authors");
const book_2 = require("./Queries/book");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getBooks: book_2.GET_BOOKS,
        getBook: book_2.GET_BOOK,
        getAuthors: authors_1.GET_AUTHORS,
        getAuthor: authors_1.GET_AUTHOR,
    },
});
const Mutations = new graphql_1.GraphQLObjectType({
    name: "Mutations",
    fields: {
        createAuthor: author_1.CREATE_AUTHOR,
        createBook: book_1.CREATE_BOOK,
        removeAuthor: author_1.REMOVE_AUTHOR,
        removeBook: book_1.REMOVE_BOOK,
        updateBook: book_1.UPDATE_BOOK,
    },
});
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutations,
});
exports.default = schema;
