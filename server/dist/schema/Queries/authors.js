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
exports.GET_AUTHORS = exports.GET_AUTHOR = void 0;
const graphql_1 = require("graphql");
const Author_1 = require("../TypeDefs/Author");
const Author_2 = __importDefault(require("../../models/Author"));
exports.GET_AUTHOR = {
    type: Author_1.AuthorType,
    args: { id: { type: graphql_1.GraphQLID } },
    resolve: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let author = yield Author_2.default.findById(args.id);
            return author;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
exports.GET_AUTHORS = {
    type: graphql_1.GraphQLList(Author_1.AuthorType),
    resolve: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let authors = yield Author_2.default.find({});
            return authors;
        }
        catch (err) {
            console.log(err.message);
        }
    }),
};
