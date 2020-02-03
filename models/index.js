
const mongoose = require('mongoose');

const Categories = require('./categories-schema.js');
const MONGOOSE_URI = 'mongodb://localhost:27017/cateogries';
mongoose.connect(MONGOOSE_URI,{useNewUrlParser:true});
const food = new Categories({name:'fruit'});
console.log(food);
food.save();
console.log('After saving');