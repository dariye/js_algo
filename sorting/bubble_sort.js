/*
 * Sort a given input of arrays
 * @param [Array] arr
 * @returns [Array]
 */

function sort(array) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        const temp = array[i]
        array[i] = array[i+1]
        array[i+1] = temp
        swapped = true
      }
    }
  } while(swapped)
  return array
}

/*
 * Tests
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
const array = sort(generateArray(15))
console.log(array)
