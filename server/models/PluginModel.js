const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PluginSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  directoryName: {
    type: String,
    required: true,
    unique: true,
  },
  icon: {
    path: {
      type: String,
      required: true,
      default: 'icon.png',
    },
    buffer: {
      type: Buffer,
      required: true,
    },
  },
  dateInstalled: {
    type: Date,
    default: Date.now,
  },
}, { strict: false });

PluginSchema.name = 'Plugin';

module.exports = mongoose.model('Plugin', PluginSchema, 'plugins');
