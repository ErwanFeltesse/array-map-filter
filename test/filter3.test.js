const { expect } = require('chai');
const filterOnPrice = require('../filter/ex3.js');

const products = [
  {
    name: 'iPhone X',
    price: 1159
  },
  {
    name: 'Xiaomi Mi A2',
    price: 209
  },
  {
    name: 'Samsung Galaxy Note 9',
    price: 992
  },
  {
    name: 'Huawei P20',
    price: 480
  },
  {
    name: 'Huawei P20 Pro',
    price: 649
  }
];

describe('filter - exercice 3', () => {

  it('filterOnPrice (price <= 500)', () => {
    expect(filterOnPrice(products, 500))
    .to.deep.equal([
      {
        name: 'Xiaomi Mi A2',
        price: 209
      },
      {
        name: 'Huawei P20',
        price: 480
      }
    ]);
  });
  it('filterOnPrice (price <= 649)', () => {
    expect(filterOnPrice(products, 649))
    .to.deep.equal([
      {
        name: 'Xiaomi Mi A2',
        price: 209
      },
      {
        name: 'Huawei P20',
        price: 480
      },
      {
        name: 'Huawei P20 Pro',
        price: 649
      }
    ]);
  });

});

