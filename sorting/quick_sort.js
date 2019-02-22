/**
 * Quick sort uses a random pivot value to separate the n given values into two
 * piles, one is less than the pivot and the other greater than the pivot
 */

/* 
 * Quick sort
 * @param {Object[]} array
 * @param {number} left
 * @param {number} right
 * @returns {Object[]}
 */

function sort(array, left, right) {
  left = left || 0
  right = right || array.length - 1
  const pivot = partition(array, left, right)
  if (left < pivot - 1) {
    sort(array, left, pivot - 1)
  }
  if (right > pivot) {
    sort(array, pivot, right)
  }
  return array
}

/**
 * Get pivot
 * @param {Object[]} array
 * @param {number} left
 * @param {number} right
 */
function partition(array, left, right) {
  const pivot = Math.floor(Math.random() * (right - left + 1) + left)
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++
    }
    while (array[right] > array[pivot]) {
      right--
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]]
    }
  }
  return left
}

/**
 * Tests
 */

const generateArray = (size) => {
  const array = []
  const getRand = () => Math.floor(Math.random() * 100 + 1)
  for(let i = 0; i < size; i++) {
    array.push(getRand())
  }
  console.log(array)
  return array
}

const sorted = sort(generateArray(20))
console.log(sorted)
