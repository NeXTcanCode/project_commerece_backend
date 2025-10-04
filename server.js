const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

let products = [
  {
    id: 1,
    title: "iPhone 13",
    img: "https://images.pexels.com/photos/5863392/pexels-photo-5863392.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Apple iPhone 13 with A15 Bionic chip",
    price: 70000,
    rating: 5,
    quantity: 1,
  },
  {
    id: 2,
    title: "iPhone 14 Pro",
    img: "https://images.pexels.com/photos/4042800/pexels-photo-4042800.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Apple iPhone 14 Pro with ProMotion display",
    price: 110000,
    rating: 5,
    quantity: 1,
  },
  {
    id: 3,
    title: "iPhone SE",
    img: "https://images.pexels.com/photos/5077046/pexels-photo-5077046.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Apple iPhone SE, affordable and compact",
    price: 35000,
    rating: 4,
    quantity: 1,
  },
  {
    id: 4,
    title: "Samsung Galaxy S21",
    img: "https://images.pexels.com/photos/4042802/pexels-photo-4042802.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Samsung Galaxy S21 with Exynos/ Snapdragon",
    price: 65000,
    rating: 4,
    quantity: 1,
  },
  {
    id: 5,
    title: "Samsung Galaxy S22 Ultra",
    img: "https://images.pexels.com/photos/4042803/pexels-photo-4042803.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Samsung Galaxy S22 Ultra with S-Pen support",
    price: 120000,
    rating: 5,
    quantity: 1,
  },
  {
    id: 6,
    title: "Samsung Galaxy Note 20",
    img: "https://images.pexels.com/photos/4042801/pexels-photo-4042801.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Samsung Galaxy Note 20 with stylus support",
    price: 85000,
    rating: 4,
    quantity: 1,
  },
  {
    id: 7,
    title: "Nokia 8.3",
    img: "https://images.pexels.com/photos/4042805/pexels-photo-4042805.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Nokia 8.3 5G",
    price: 45000,
    rating: 4,
    quantity: 1,
  },
  {
    id: 8,
    title: "Nokia G400",
    img: "https://images.pexels.com/photos/4042804/pexels-photo-4042804.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Nokia G400 mid-range 5G phone",
    price: 30000,
    rating: 3,
    quantity: 1,
  },
  {
    id: 9,
    title: "Nokia XR20",
    img: "https://images.pexels.com/photos/4042810/pexels-photo-4042810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Rugged phone — Nokia XR20",
    price: 50000,
    rating: 4,
    quantity: 1,
  },
  {
    id: 10,
    title: "OnePlus 9",
    img: "https://images.pexels.com/photos/4042810/pexels-photo-4042810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "OnePlus 9 with Hasselblad camera",
    price: 55000,
    rating: 4,
    quantity: 1,
  },
  {
    id: 11,
    title: "Google Pixel 7",
    img: "https://images.pexels.com/photos/4042812/pexels-photo-4042812.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Google Pixel 7 with clean Android",
    price: 60000,
    rating: 5,
    quantity: 1,
  },
  {
    id: 12,
    title: "Xiaomi Mi 11",
    img: "https://images.pexels.com/photos/4042820/pexels-photo-4042820.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    description: "Xiaomi Mi 11 flagship phone",
    price: 50000,
    rating: 4,
    quantity: 1,
  },
];

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
