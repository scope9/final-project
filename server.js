const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("game/build"));
}

// Add routes, both API and view
require('./routes/api-routes')(app);
//srequire('./routes/routes')(app);
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/clickyGame");

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/game/build/index.html'));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});