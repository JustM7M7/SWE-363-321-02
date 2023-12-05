const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

module.exports = router;
