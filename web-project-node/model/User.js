const mongoose = require('mongoose');

const userData = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model("User", userData);