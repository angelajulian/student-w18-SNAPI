const { Schema, model } = require("mongoose"); //

const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema({
  username: {
    type: String, // String
    required: true, // Required
    unique: true, // Unique
    trimmed: true, // Trimmed
  },
  email: {
    type: String, // String
    required: true, // Required
    unique: true, // Unique
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: {},
  friends: {},
});

User.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = Users;

// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
