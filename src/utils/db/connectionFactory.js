

const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://champuser:champpassword@localhost:27017/championship?authSource=admin', {useNewUrlParser: true});

