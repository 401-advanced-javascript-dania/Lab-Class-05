
const schema = require('./products-schema.js');
const model = require('../data-model-interface.js');
class Products extends model{
  constructor(){
    super(schema);
  }

}
module.exports = Products;