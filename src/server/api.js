// api.js
const express = require("express");
const router = express();
const ttt = require("../logic/tictactoe");

router.get("/initializeBoard/", (req, res) => {
	res.status(200).send(ttt.initializeBoard());
});

router.get("/cellClick/:cellid", (req, res) => {
    res.status(200).send(ttt.currentPlayer(req.params.cellid));
});

router.get("/checkCell/:cellid", (req, res) => {
    res.status(200).send(ttt.checkCell(req.params.cellid));
});

router.get("/checkWinner", (req, res) => {
	res.status(200).send(ttt.checkForWinner());
})

module.exports = router;