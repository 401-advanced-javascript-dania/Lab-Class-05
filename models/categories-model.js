
const schema = require('./categories-schema.js');
const model = require('../data-model-interface.js');
class Categories extends model{
  constructor(){
    super(schema);
  }
}
module.exports = Categories;