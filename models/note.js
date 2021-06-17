const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  ss: {
    type: String,
    required: true,
  },
  sn: {
    type: String,
    required: true,
  },
  pp: {
    type: Number,
    required: true,
  },
  pd: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Note', notesSchema, 'Notes');
