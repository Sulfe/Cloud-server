var express = require("express");
var router = express.Router();
var app = express();
var fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

module.exports = router;

app.get("public/images", function (req, res) {
    fs.readFile("002.jpg", function (error, data) {
        if (error) {
            res.send();
        }
        res.send(data);
    });
});
