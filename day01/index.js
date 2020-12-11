const { readFileByLine } = require("../helper")
const parens = readFileByLine("input", "01")[0].split("")


let floor = 0
let enteredBasementAtIndex
for (const i in parens) {
    const paren = parens[i]
    paren === "(" ? floor++ : floor--
    if (floor === -1 && !enteredBasementAtIndex) {
        enteredBasementAtIndex = Number(i) + 1
    }

}
console.log({ floor, enteredBasementAtIndex })