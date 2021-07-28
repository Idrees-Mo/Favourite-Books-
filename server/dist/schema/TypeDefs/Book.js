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
exports.BookType = void 0;
const graphql_1 = require("graphql");
const Author_1 = __importDefault(require("../../models/Author"));
const Author_2 = require("./Author");
exports.BookType = new graphql_1.GraphQLObjectType({
    name: "Book",
    description: "Book Type",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        cover_url: { type: graphql_1.GraphQLString },
        authId: { type: graphql_1.GraphQLID },
        author: {
            type: Author_2.AuthorType,
            resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    const author = yield Author_1.default.findById(parent.authId);
                    return author;
                }
                catch (err) {
                    console.log(err.message);
                }
            }),
        },
    }),
});
