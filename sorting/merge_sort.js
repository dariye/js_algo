/**
 * Merge sort works by taking an input of elements and successively dividing the
 * input by half and running sorting algorithm on those halves until sorted, and
 * then the output combines the two sorted piles
 */

/**
 * Merge sort
 * @param [Array]
 * @return [Array]
 */
function sort(array) {
  if (array.length === 1) return array
  const middle = Math.floor(array.length/2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  return merge(sort(left), sort(right))
}

function merge(left, right) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

/**
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

const sorted = sort(generateArray(20))
console.log(sorted)
