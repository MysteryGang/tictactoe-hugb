// api.js
const express = require("express");
const router = express();
const ttt = require("../logic/tictactoe");

var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies

router.get("/cellclick/:cellid", (req, res) => {
    res.status(200).send(ttt.currentPlayer(req.params.cellid));
});

router.get("/postCell/:cellid", (req, res) => {
    res.status(200).send(ttt.checkCell(req.params.cellid));
});

module.exports = router;