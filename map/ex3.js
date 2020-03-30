/* Array.prototype.map - Exercise 3

* FAIR WARNING: this one is harder than the two others!
* Write the CONTENTS of the `getMoviesFreshness` function
* It receives an array of OBJECTS representing movies
* Each "movie" object has two properties:
   * `name` name of the movie
   * `rating` the average rating it's been given on rottentomatoes.com
* `getMoviesFreshness` must return an array containing the objects of the input array, EACH
  having a new property. The KEY of this new property should be `label`, and the associated VALUE
  should be a string, which depends on the `rating` property:
  * If `rating` is STRICTLY below 60, the value to assign to `label` is "rotten".
  * If `rating` is between 60 and 75 (included), the value to assign to `label` is "fresh".
  * If `rating` STRICTLY above 75, the value to assign to `label` is "certified fresh".
* You might need a refresher on how to manipulate object literals:
  https://www.dyn-web.com/tutorials/object-literal/properties.php

Sample movies array, i.e. INPUT:
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

Expected OUTPUT for this sample:
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

 */

function getMoviesFreshness(movie) {
  movies = [
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
for (movie.label in movies)
 { if (movie.rating < 60) {return movie.map(movie.label="rotten")}
    else if (movie.rating>=60 && movie.rating<=75){return movies.map (movie.label ="fresh") }else if (movies.rating>75){
    return  movies.map(movie.label= "Certified fresh") }    
    }return {name: movie.name, rating:movie.rating, label:movie.label}
   
  }






// DON'T TOUCH THIS!
module.exports = getMoviesFreshness;
