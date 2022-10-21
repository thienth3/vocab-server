const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const referenceSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  highlightRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'highlight',
    required: true
  },
  content: {
    type: String,
    required: false
  },
  sentence: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
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
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model('reference', referenceSchema);
