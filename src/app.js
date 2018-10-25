// app.js
const express = require("express");
const path = require("path");
const app = express();
const api = require("./server/api");

// Serve static files
app.use(express.static(path.join(__dirname, "../", "dist")));

// Use the API router
app.use("/api", api);

// Catch all other requests
app.get("*", (req, res) => {
  res.status(404).send({ error: "Not found" });
});

module.exports = app;
