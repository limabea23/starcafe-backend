const express = require("express");
const cors = require("cors");
const productRouters = require("./src/routes/productRoutes");

const app = express();
const PORT = 5080;

app.use(cors());
app.use(express.json());

app.use("/api", productRouters);

app.get("/", (req,res) => {
    res.send("HARRY STYLES IS THE BEST 💗🌟🤠💋");
});

app.listen(PORT, () => {
    console.log(`Suuucessoooo, servidor rodando na porta ${PORT} 💗🌟🤠💋`);
});