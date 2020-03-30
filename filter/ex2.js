/* Array.prototype.filter - Exercise 2

* Write the CONTENTS of the `keepStarks` function
* It receives an array of strings as an argument (more specifically, names of
  characters from Game of Thrones)
* The function must return an array, containing ONLY members of the Stark family

WAIT, WAIT, there's a little more you need to know! There are different ways to write the
function you'll give as a parameter to filter. You will probably need ONE of these:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

Sample names array, i.e. INPUT:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Expected OUTPUT for this sample:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']

*/

function keepStarks(names) {
  namesArray = ["Bran Stark", "Cersei Lannister", "Sandor Clegane", "Arya Stark", "Yara Greyjoy", "Sansa Stark"]
return namesArray.filter(names => names.includes("Stark"));

}

// DON'T TOUCH THIS!
module.exports = keepStarks;
