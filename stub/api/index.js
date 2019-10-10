const fs = require("fs");
const path = require("path");

const router = require("express").Router();

const loadJson = (filepath, encoding = "utf8") =>
    JSON.parse(
        fs.readFileSync(path.resolve(__dirname, `${filepath}.json`), { encoding })
    );


router.get("/api/organizations", (req, res) => {
    res.send(
        loadJson('./getOrgsData')
    );
});


module.exports = router

