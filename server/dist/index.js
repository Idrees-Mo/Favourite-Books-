"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const schema_1 = __importDefault(require("./schema"));
const app = express_1.default();
db_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/graphql", express_graphql_1.graphqlHTTP({
    schema: schema_1.default,
    graphiql: true,
}));
app.use("/", (req, res) => {
    res.send("Hello, it is a graphQLServer");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
