const { Schema, model } = require("mongoose"); //

const User = new Schema({
  username: {
    type: String,
    // String
    // Unique
    // Required
    // Trimmed
  },
  email: {
    // String
    // Required
    // Unique
    // Must match a valid email address (look into Mongoose's matching validation)
  },
  thoughts: {},
  friends: {},
});

module.exports = Users;

// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
