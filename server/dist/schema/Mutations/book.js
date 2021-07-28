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
exports.UPDATE_BOOK = exports.REMOVE_BOOK = exports.CREATE_BOOK = void 0;
const graphql_1 = require("graphql");
const Book_1 = __importDefault(require("../../models/Book"));
const Book_2 = require("../TypeDefs/Book");
exports.CREATE_BOOK = {
    type: Book_2.BookType,
    args: {
        title: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        cover_url: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        authId: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
    },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let book = yield Book_1.default.create(args);
            book.save();
            return book;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
exports.REMOVE_BOOK = {
    type: Book_2.BookType,
    args: { id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let book = yield Book_1.default.findByIdAndRemove(args.id);
            return book;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
exports.UPDATE_BOOK = {
    type: Book_2.BookType,
    args: {
        id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        title: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        cover_url: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        authId: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
    },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let book = yield Book_1.default.findByIdAndUpdate(args.id, {
                id: args.id,
                title: args.title,
                cover_url: args.cover_url,
                authId: args.authId,
            });
            return book;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
