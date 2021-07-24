import express from "express";
import conncetDB from "./config/db";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();

app.use(express.json());
conncetDB();
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

const PORT = 5000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
