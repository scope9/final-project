const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TweetSchema object
const TopScore = new Schema({
  topName: {
    type: String,
    required: "You must include the name of the user with the top score"
  },
  topScore: {
    type: Number,
    required: "You must include the top score"
  }
});

// This creates our model from the above schema, using Mongoose's model method
var Score = mongoose.model('Score', TopScore);

// Export the Tweet model
module.exports = Score;