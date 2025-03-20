const express = require("express");
const app = express();

// Use the correct Render port
const PORT = process.env.PORT || 3000;

// Simple homepage route
app.get("/", (req, res) => {
  res.send("✅ ChessStakes Server is Live!");
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
