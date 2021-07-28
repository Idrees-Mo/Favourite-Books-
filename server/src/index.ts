require("dotenv").config();
import express from "express";
import conncetDB from "./config/db";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();
conncetDB();
app.use(cors());

app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.use("/", (req, res) => {
  res.send("Hello, it is a graphQLServer");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
