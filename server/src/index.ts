import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
const app = express();

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

const PORT = 5000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
