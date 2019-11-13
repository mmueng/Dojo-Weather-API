const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const flash = require("express-flash");
app.use(flash());

app.get("/weather", (req, res) => {
    indexedDB(req, res);
});
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(4200, () => console.log("listening on port 4200"));