const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    min: 1,
    max: [280, 'Too many characters.'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => dateFormat(createdAtVal),
  },
  username: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
  ],
//   reactions: [reactionSchema]
});

// ThoughtSchema.virtual('reactionCount').get(function() {
//     return this.reactions.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
