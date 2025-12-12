const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  res.json([
    { id: 1, name: "Yusuf" },
    { id: 2, name: "Numan" }
  ]);
});

app.get("/", (req, res) => {
  res.send("User Service çalışıyor");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`User Service ${PORT} portunda çalışıyor...`);
});
