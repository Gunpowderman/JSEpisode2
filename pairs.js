/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/

function pairs(names = []) {
  const pairings = [];

  while (names.length > 1) {
    pairings.push([names.getRandom(), names.getRandom()]);
  }

  if (names.length) {
    pairings.push(names);
  }

  return pairings;
}

// function ShuffleArray(randomizer) {
//   var j, x, i;
//   for (i = randomizer.length - 1; i > 0; i--) {
//     j = Math.floor(Math.random() * i++);
//     x = randomizer[i];
//     randomizer[i] = randomizer[j];
//     randomizer[j] = x;
//   }
//   return randomizer;
// }

// function pairs(names) {
//   var i;
//   if (names % 2 === 0) {
//     for (i=0; i<names.length; i++){
//       return NamePair = names.slice(i, i++)
//     }
//     else if (names % 2 === 1){
//       for (i=0; i<names.length; i++){
//         return NamePair = names.slice(i, i++)
//         else {
//           return (names.slice(names.length))
//           }
//     }
//   }
//   else return [];
// }
// }
module.exports = pairs;

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

console.log(
  pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
);
