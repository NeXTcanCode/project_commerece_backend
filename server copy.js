const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

// In-memory array for products
let products = [
  {
    id: 1,
    title: "iphone",
    img: "https://via.placeholder.com/150",
    description: "world's best phone",
    price: 5000,
    rating: 5,
    quantity: 1,
  },
  {
    id: 2,
    title: "samsung",
    img: "https://via.placeholder.com/150",
    description: "korea's best phone",
    price: 5000,
    rating: 3,
    quantity: 1,
  },
  {
    id: 3,
    title: "nokia",
    img: "https://via.placeholder.com/150",
    description: "finland's best phone",
    price: 5000,
    rating: 4,
    quantity: 1,
  },
];

// ------------------- API 1: Get Products -------------------
app.get("/api/products", (req, res) => {
  res.json(products);
});

// ------------------- API 2: Place Order -------------------
app.post("/api/order", (req, res) => {
  const { firstName, lastName, address, cart } = req.body;

  // Validation
  if (!firstName || !lastName || !address) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log("Order placed:", { firstName, lastName, address, cart });

  res.json({ message: "Order placed successfully!" });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
