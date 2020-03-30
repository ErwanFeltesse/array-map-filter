const { expect } = require('chai');
const getFoodCategories = require('../map/ex2.js');

describe('map - exercice 2', () => {

  it('getFoodCategories', () => {
    expect(getFoodCategories(  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',
      isVegetarian: true
    }
  ])).to.deep.equal([
      'Bacon is not suitable for vegetarians',
      'Sausage is not suitable for vegetarians',
      'Tofu is suitable for vegetarians',
      'Chick Pea is suitable for vegetarians'
    ]);
  });

});

