const fs = require("fs")
const path = require("path")
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), "utf8").trim()

function largestFromStr(str) {
  const parsedStr = str.split("").map(num => parseInt(num))

  let highestNum = 0

  for (let i = 0; i < parsedStr.length; i++) {
    for (let j = i + 1; j < parsedStr.length; j++) {
      const parsedNum = parseInt("" + parsedStr[i] + "" + parsedStr[j])
      if (parsedNum > highestNum) {
        highestNum = parsedNum
      }
    }
  }

  return highestNum
}

function solutionOne() {
  const banks = input.split("\n")

  let total = 0
  for (let bank of banks) {
    total += largestFromStr(bank)
  }

  return total
}

console.log(`SOLUTION 1: ${solutionOne()}`)
