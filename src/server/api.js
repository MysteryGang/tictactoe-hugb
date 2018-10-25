// api.js
const express = require("express");
const router = express();
const logic = require("../logic/tictactoe");

router.get("/hello", (req, res) => {
    res.status(200).send("Hello");
});

module.exports = router;