const { Schema, model } = require('mongoose');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, 
      trimmed: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,"invalid email"],
    },
    thoughts: [
        {
            ref: "Thought",
            type: Schema.Types.ObjectId
        }
    ],
    friends: [
        {
            ref: "User",
            type: Schema.Types.ObjectId
        }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

// Create a virtual property `commentCount` that gets the amount of comments per user
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

const User = model('user', userSchema);

module.exports = User;
