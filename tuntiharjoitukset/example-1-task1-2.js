// USE THE EXPRESS LIBRARY
const express = require("express");

// THIS IS THE EXPRESS APP
const app = express();

// WHERE TO OPEN THE EXPRESS APP
const PORT = process.env.PORT || 3000;

// Task 2: Serve static files from public/.
//app.use(express.static("public"));

// Optional: basic root response to verify the server is up.
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("FullStack on about!.");
});

app.get("/contact", (req, res) => {
  res.send("FullStack contact!.");
});
// This is running from terminal
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
