const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const highlightSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  sentence: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: false,
  },
  os: {
    type: String,
    required: false,
  },
  count: {
    type: Number,
    required: true,
    default: 1
  },
  random: {
    type: Number,
    required: true,
    default: Math.random()
  },
  rank: {
    type: Number,
    required: true,
    default: 0
  },
  deletedAt: {
    type: Date,
    required: false
  }
}, { timestamps: true });

module.exports = mongoose.model('highlight', highlightSchema);
