const { expect } = require('chai');
const getMoviesFreshness = require('../map/ex3.js');

describe('map - exercice 3', () => {

  it('getMoviesFreshness', () => {
    expect(getMoviesFreshness(
      [
        {
          name: 'Crazy Rich Asians',
          rating: 93
        },
        {
          name: 'Skyscraper',
          rating: 46
        },
        {
          name: 'Leave No Trace',
          rating: 100
        },
        {
          name: 'White Boy Rick',
          rating: 60
        }
      ]
    )).to.deep.equal(
      [
        {
          name: 'Crazy Rich Asians',
          rating: 93,
          label: 'certified fresh'
        },
        {
          name: 'Skyscraper',
          rating: 46,
          label: 'rotten'
        },
        {
          name: 'Leave No Trace',
          rating: 100,
          label: 'certified fresh'
        },
        {
          name: 'White Boy Rick',
          rating: 60,
          label: 'fresh'
        }
      ]
    );
  });

});

