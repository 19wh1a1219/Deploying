const mongoose = require('mongoose');

const reqSchema = mongoose.Schema();

module.exports = mongoose.model('planets', reqSchema);