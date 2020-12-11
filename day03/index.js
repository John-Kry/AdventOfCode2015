const { readFileByLine } = require("../helper")
const line = readFileByLine("input", "03")[0].split("")


let santa = { x: 0, y: 0, housesVisited: 1, count: 0 }
let elf = { x: 0, y: 0, housesVisited: 0, count: 0 }

let i = 0
let seen = new Map()
for (const direction of line) {
    if (i % 2 == 0) {
        visitHouse(santa, direction, seen)
    } else {
        visitHouse(elf, direction, seen)
    }
    // console.log(elf)
    i++
}
console.log(elf.count)
console.log(santa.count)

function visitHouse(person, direction, seen) {

    if (direction === "^")
        person.y++
    else if (direction === ">")
        person.x++
    else if (direction === "v")
        person.y--
    else if (direction === "<")
        person.x--
    else
        console.log("you fd up")
    if (!seen.get(`${person.x},${person.y}`))
        person.count++
    seen.set(`${person.x},${person.y}`, true)
}