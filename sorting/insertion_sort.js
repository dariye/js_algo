/*
 * Insertion sort works by taking an input of array and selecting an arbitrary
 * element and placing it in the proper place
 */

/*
 * Insertion sort function
 * @param [Array]
 * returns [Array]
 */

function  sort(array) {
  for(let i = 0; i < array.length; i++) {
    let temp = array[i]
    let j = i - 1
    while (j >= 0 && array[j] > temp) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = temp
  }
  return array
}

/** Tests
*/

const generateArray = (size) => {
  const array = []
  const getRand = () => Math.floor(Math.random() * 100) + 1
  for (let i = 0; i < size; i++) {
    array.push(getRand())
  }
  console.log(array)
  return array
}

const sorted = sort(generateArray(20))
console.log(sorted)
