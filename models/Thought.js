const { Schema, model } = require("mongoose"); //

const Thought = new Schema({
  thoughtText: {
    // string, required, 1-280 chara
  },
  createdAt: {
    //date, set default to current timestamp, use getter
  },
  username: {
    //string, required,
  },
  reactions: {
    //array of nested documents created with reaction schema
  },
  //Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
});

module.exports = Thought;
