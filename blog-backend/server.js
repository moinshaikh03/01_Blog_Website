const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const blogRoutes = require("./routes/blogRoutes"); // import routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", blogRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch(err => console.error("❌ MongoDB connection error:", err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
