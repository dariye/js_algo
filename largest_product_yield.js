function computeProduct(arr) {
  const sorted = arr.sort((a, b) => a-b)
  let p1 = 1
  let p2 = 1
  const length = sorted.length - 1

  for (let i = length; i > length - 3; i--) {
    p1 = p1 * sorted[i]
  }

  p2 = sorted[0] * sorted[1] * sorted[length]

  if (p1 > p2) return p1

  return p2
}

console.log(computeProduct([-10, 7, 29, 30, 5, -10, -70]))

