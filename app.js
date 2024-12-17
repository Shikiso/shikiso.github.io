const express = require('express');
const path = require('path');
const publicDirectory = path.dirname(__dirname, "./public");
const app = express();

app.set('view engine', 'hbs');
app.use(express.static('.'));
app.use(express.urlencoded({ extended: 'false' }));
app.use(express.json());

app.get("/", (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
