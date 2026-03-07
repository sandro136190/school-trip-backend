const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const destinationRoutes = require("./routes/destinationRoutes");

const app = express();
const PORT = 5000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images")); // serve images

mongoose
  .connect(
    "mongodb+srv://sandro136190:S%40ndro2011@schooltrip.krer7cq.mongodb.net/schooltrip",
  )
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log(err));
// ===== ROUTES =====
app.use("/destinations", destinationRoutes);

// ===== DEFAULT ROUTE =====
app.get("/", (req, res) => {
  res.send("Server is running! Go to /trips to see data.");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
