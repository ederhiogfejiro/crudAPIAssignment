
const express = require("express");
const bodyParser = require("body-parser");

const numberRouters = require("./routes/numbers");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/numbers", numberRouters);

app.get("/", (req, res) => {
     console.log("TEST");
     res.send("Hello From HomePage");
});

app.listen(PORT, () => {
     console.log(`server running on ${PORT}`);
});
