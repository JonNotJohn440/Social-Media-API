const { Schema, Types } = require('mongoose');
const moment = require ("moment")

// Schema to create Student model
const reactionSchema = new Schema(
  {
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: time => moment(time).format("MM/DD/YYYY hh:mm:ss a")
    },
    username:   {
            type: String,
            required: true,
    },

    reactionBody: {
        type: String,
        required: true,
        maxlength: 250,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
