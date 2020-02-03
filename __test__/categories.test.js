
require('@code-fellows/supergoose');
const Categories = require('../models/categories-model.js');
const food = new Categories();
describe('Categories Model',()=>{
  it('can create() a new food item',()=>{
    let obj = {name:'test food'};
    return food.create(obj)
      .then(record=>{
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(erorr=>console.error('Erorr:something goes wrong',erorr));


  });
  it('can get() a food item',()=>{
    let obj = {name:'test food'};
    return food.create(obj)
      .then(record=>{
        return food.get(record._id)
          .then(foodItem=>{
            Object.keys(obj).forEach(key=>{
              expect(foodItem[key]).toEqual(obj[key]);
            });
          });
      })
      .catch(erorr=>console.error('Erorr:something goes wrong',erorr));

  });
  it('can update() a food item',()=>{
    let obj = {name:'test food'};
    return food.create(obj)
      .then(record=>{
        food.get(record._id);
        food.update(record._id,record)
          .then(foodItem=>{
            Object.keys(obj).forEach(key=>{
              expect(foodItem[key]).toEqual(obj[key]);
            });
          });

      })
      .catch(erorr=>console.error('Erorr:something goes wrong',erorr));

  });
  it('can delete() a food item ',()=>{
    let obj = {name:'test food'};
    return food.create(obj)
      .then(record=>{
        food.get(record._id);
        food.delete(record._id)
          .then(foodItem=>{
            Object.keys(obj).forEach(key=>{
              expect(foodItem[key]).toEqual(obj[key]);

            });
          });

      })
      .catch(erorr=>console.error('Erorr:something goes wrong',erorr));

  });
});