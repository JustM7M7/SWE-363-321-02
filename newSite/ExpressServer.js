const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./")); // Serve static files

// Define a route to handle form submission
app.post("/submit-form", (req, res) => {
  const { name, email, message, signature } = req.body;
  res.send("Form submitted successfully! We have received your data.");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "homePage.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
