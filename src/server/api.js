// api.js
const express = require("express");
const router = express();
const ttt = require("../logic/tictactoe");

router.get("/cellclick", (req, res) => {
    res.status(200).send(ttt.currentPlayer());
});

module.exports = router;