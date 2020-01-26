'use strict';
require('@code-fellows/supergoose');
const Products=require('../models/products-model.js')
const food=new Products();
describe('Products Model',()=>{
    it('can create() a new food item',()=>{
        let obj={price:40 , weight:32, quantity_in_stock:44};
        return food.create(obj)
        .then(record=>{
            Object.keys(obj).forEach(key=>{
                expect(record[key]).toEqual(obj[key]);
            })
        })
        .catch(erorr=>console.error('Erorr:something goes wrong',erorr))


    })
    it('can get() a food item',()=>{
        let obj={price:40 , weight:32, quantity_in_stock:44};
        return food.create(obj)
        .then(record=>{
            return food.get(record._id)
            .then(foodItem=>{
                Object.keys(obj).forEach(key=>{
                    expect(foodItem[key]).toEqual(obj[key])
                })
            })
        })  
        .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

    })
    it('can update() a food item',()=>{
        let obj={price:40 , weight:32, quantity_in_stock:44};
        return food.create(obj)
        .then(record=>{
            food.get(record._id)
            food.update(record._id,record)
            .then(foodItem=>{
                Object.keys(obj).forEach(key=>{
                    expect(foodItem[key]).toEqual(obj[key])
                })
            })

        })
        .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

    })
    it('can delete() a food item ',()=>{
        let obj={price:40 , weight:32, quantity_in_stock:44};
        return food.create(obj)
        .then(record=>{
            food.get(record._id)
            food.delete(record._id)
            .then(foodItem=>{
                Object.keys(obj).forEach(key=>{
                    expect(foodItem[key]).toEqual(obj[key])

                })
            })

        })  
        .catch(erorr=>console.error('Erorr:something goes wrong',erorr))

    })
})