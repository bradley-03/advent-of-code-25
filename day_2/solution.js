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

console.log(solutionOne())
