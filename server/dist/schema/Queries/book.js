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
exports.GET_BOOK = exports.GET_BOOKS = void 0;
const graphql_1 = require("graphql");
const Book_1 = __importDefault(require("../../models/Book"));
const Book_2 = require("../TypeDefs/Book");
exports.GET_BOOKS = {
    type: graphql_1.GraphQLList(Book_2.BookType),
    resolve: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let books = yield Book_1.default.find({});
            return books;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
exports.GET_BOOK = {
    type: Book_2.BookType,
    args: { id: { type: graphql_1.GraphQLID } },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let book = Book_1.default.findById(args.id);
            return book;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
