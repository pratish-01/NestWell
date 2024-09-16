require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./utils/userdatabase");

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS (important for allowing cross-origin requests from your React Native app)
app.use(cors());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// API route for your React Native app
// app.post('/data', (req, res) => {
//   const { message } = req.body;
//   res.json({ response: `You sent: ${message}` });
// });

// Start the server
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port", PORT);
    });
});
