const express = require("express");
const app = express();

const productsJson = require("./products.json");

app.get("/products", (req, res) => {
  // Return product data
  res.json(productsJson);
});

app.get("/user", (req, res) => {
  // Extracting userId and username from the first product in productsJson (modify as needed)
  const userData = {
    userId: productsJson[0].id,
    username: productsJson[0].title.replace(/\s+/g, '_').toLowerCase(), // Using product title as username
  };

  // Return user data
  res.json(userData);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
