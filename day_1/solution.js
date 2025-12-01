const fs = require("fs")
const input = fs.readFileSync("./input.txt", "utf8").trim()

const instructions = input.split("\n")
const defaultDialPosition = 50

// split instruction into useable stuff
function parseInstruction(instruction) {
  return [instruction[0], parseInt(instruction.slice(1, instruction.length))]
}

// returns dial position after instruction performed
function moveDial(position, instruction) {
  const parsedInstruction = parseInstruction(instruction)

  return parsedInstruction[0] === "L" ? position - parsedInstruction[1] : position + parsedInstruction[1]
}

function totalZeroes() {
  let zeroCounter = 0
  let dialPosition = defaultDialPosition

  for (let instruction of instructions) {
    dialPosition = moveDial(dialPosition, instruction)
    if (dialPosition % 100 === 0) {
      zeroCounter++
    }
  }
  return zeroCounter
}

console.log(totalZeroes())
