// api.js
const express = require("express");
const router = express();
const ttt = require("../logic/tictactoe");

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
//router.use(bodyParser.urlencoded({ extended: true }));

router.get("/cellclick", (req, res) => {
    res.status(200).send(ttt.currentPlayer());
});

router.get("/initialize", (req, res) => {
    res.status(200).send(ttt.initialize());

router.post("/postCell", (req, res) => {
    res.status(200).send(ttt.checkCell(req.body.cellID));
});

module.exports = router;