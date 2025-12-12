const express = require("express");
const app = express();

const version = "v2";

app.get("/products", (req, res) => {
  const products = [
    { id: 1, product: "Telefon" },
    { id: 2, product: "Laptop" },
    { id: 3, product: "V2 Test Öğesi" }
  ];

  res.json(products);
});

app.get("/", (req, res) => {
  res.send(`Product Service ${version} çalışıyor`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Product Service ${version} port ${PORT} üzerinde çalışıyor...`);
});
