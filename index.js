// ---------- APPLICATION ----------
// Import packages
require(`dotenv`).config();
const express = require(`express`);
const cors = require(`cors`);

// Create server
const app = express();

// Enable JSON and Cross-Origin requests
app.use(cors());
app.use(express.json());

// Import routes
const formRoutes = require(`./routes/form`);
app.use(formRoutes);

// ---------- Routes ALL ----------
// Welcome route
app.get(`/`, (req, res) => {
  res.status(200).json({ message: `Welcome to my TripAdvisor backend server` });
});

//Exclude uncorrect paths
app.get(`*`, (req, res) => {
  res.status(404).json({ message: "This route does not exists" });
});

// Listening
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Started 🚀`);
});
