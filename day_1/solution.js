const fs = require("fs")
const path = require("path")
const input = fs.readFileSync(path.join(__dirname, "/input.txt"), "utf8").trim()

const instructions = input.split("\n")
const defaultDialPosition = 50

// split instruction into useable stuff
function parseInstruction(instruction) {
  return { direction: instruction[0], distance: parseInt(instruction.slice(1, instruction.length)) }
}

// returns dial position after instruction performed
function moveDial(position, instruction) {
  const { direction, distance } = parseInstruction(instruction)

  return direction === "L" ? position - distance : position + distance
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

function totalZeroesPassed() {
  let zeroCounter = 0
  let dialPosition = defaultDialPosition

  for (let instruction of instructions) {
    const { direction, distance } = parseInstruction(instruction)

    for (let i = 0; i < distance; i++) {
      if (direction === "L") {
        dialPosition = Math.abs((dialPosition - 1 + 100) % 100)
      } else if (direction === "R") {
        dialPosition = Math.abs((dialPosition + 1) % 100)
      }

      if (dialPosition === 0) {
        zeroCounter++
      }
    }
  }
  return zeroCounter
}

console.log(`PART 1 SOLUTION: ${totalZeroes()}`)
console.log(`PART 2 SOLUTION: ${totalZeroesPassed()}`)
