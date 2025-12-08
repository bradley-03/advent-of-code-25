const fs = require("fs")
const path = require("path")
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), "utf8").trim()

function parseRange(range) {
  const splitRange = range.split("-")

  return [parseInt(splitRange[0]), parseInt(splitRange[1])]
}

function repeatingStrCheck(str) {
  const halfLength = str.length / 2

  return str.slice(0, halfLength) === str.slice(halfLength, str.length)
}

function repeatingPatternCheck(str) {
  let valid = false

  for (let i = 1; i <= str.length / 2; i++) {
    let pattern = str.substring(0, i)
    for (let j = 0; j < str.length; j += i) {
      if (str.substring(j, j + i) !== pattern) {
        valid = false
        break
      } else {
        valid = true
      }
    }
    if (valid) break
  }

  return valid
}

function solutionOne() {
  const ranges = input.split(",")
  let total = 0

  for (let range of ranges) {
    const parsedRange = parseRange(range)
    for (let i = parsedRange[0]; i <= parsedRange[1]; i++) {
      if (repeatingStrCheck("" + i)) {
        total += i
      }
    }
  }
  return total
}

function solutionTwo() {
  const ranges = input.split(",")
  let total = 0

  for (let range of ranges) {
    const parsedRange = parseRange(range)
    for (let i = parsedRange[0]; i <= parsedRange[1]; i++) {
      if (repeatingPatternCheck("" + i)) {
        total += i
      }
    }
  }
  return total
}

console.log(solutionOne())
console.log(solutionTwo())
