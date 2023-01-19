require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const cuisineRoute = require("./routes/cuisineRoute");
const foodRoute = require("./routes/foodRoute");

app.use(express.json());
app.use(express.static("public"));

app.use("/cuisine", cuisineRoute);

app.use("/food", foodRoute);

app.get("/", (_req, res) => {
    res.send("You have accessed a Hungry Database");
});

app.listen(1234, () => {
    console.log(`Database is being listened`);
});
