/* Array.prototype.map - Exercise 1

* Write the CONTENTS of the `getStringsLength` function
* It receives an array of strings as an argument
* Inside the function, use map on the array of strings, to process each string this way:
  if you get the string STR of length LEN as an input (to map's function parameter),
  you must return "STR contains N characters" as an output
* As usual: FIRST OF ALL, focus on writing the function that processes ONE string...
  Then you only need to use this function with map.

Sample INPUT array (strings) for getStringsLength:


Expected OUTPUT for this sample array:
  [
    'Chicken contains 7 characters',
    'Bacon contains 5 characters',
    'Tofu contains 4 characters',
    'Mayonnaise contains 10 characters'
  ]



*/


function getStringsLength(strings) { 
 stringsArray= [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]
 function line (str) {return `${str}`+" contains "+`${str.length}`+" characters"}

  return stringsArray.map(line)
  }
 
console.log(getStringsLength)



// If you need, you can always visualize the result with a console.log.
// In that case, uncomment the line below (you can also add your own
// console.log INSIDE the function).
// Instead of running `npm test`, you can then use `node map/ex1`
// (you still need to run `npm test` to make sure you did right).

// console.log(getStringsLength(['Cat', 'Lion', 'Tiger', 'Jaguar', 'Leopard']));

// DON'T TOUCH THIS!
module.exports = getStringsLength;
