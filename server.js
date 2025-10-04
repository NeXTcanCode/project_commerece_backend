const express = require("express");
const cors = require("cors");
const products = require("./mockData");

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

// get api
app.get("/api/products", (req, res) => {
  res.json(products);
});

// post api
app.post("/api/order", (req, res) => {
  console.log("what is req body", req.body);
  const { firstName, lastName, email, address, cart } = req.body;

  if (!firstName || !lastName || !email || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Order placed:", { firstName, lastName, email, address, cart });
  res.json({ message: "Order placed successfully!" });
});

app.listen(3000, function () {
  console.log(`server is running on 3000`);
});
