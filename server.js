const express = require("express");
const cors = require("cors");
const tripRoutes = require("./routes/tripRoutes");

const app = express();
const PORT = 5000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images")); // serve images

// ===== ROUTES =====
app.use("/trips", tripRoutes);

// ===== DEFAULT ROUTE =====
app.get("/", (req, res) => {
  res.send("Server is running! Go to /trips to see data.");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
