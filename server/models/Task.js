const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  name: {
      type : String,
      requried: true
  },
  priority: {
    type: String,
    required: true
  },
  time : {
      type: Date,
      default: Date.now
  }
})

module.exports = mongoose.model('Task', TaskSchema);