import express from "express";
const app = express();

app.use(express.json());

app.use("/", (req, res) => {
  res.send("Hello, it is a graphQLServer");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Sever is running on port ${PORT}`));
