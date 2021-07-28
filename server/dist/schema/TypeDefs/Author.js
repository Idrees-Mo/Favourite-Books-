"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorType = void 0;
const graphql_1 = require("graphql");
const Book_1 = __importDefault(require("../../models/Book"));
const Book_2 = require("./Book");
exports.AuthorType = new graphql_1.GraphQLObjectType({
    name: "Author",
    description: "Author Type",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        photo_url: { type: graphql_1.GraphQLString },
        books: {
            type: graphql_1.GraphQLList(Book_2.BookType),
            resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    let books = yield Book_1.default.where({ authId: parent.id });
                    return books;
                }
                catch (err) {
                    console.log(err.message);
                }
            }),
        },
    }),
});
