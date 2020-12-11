const { readFileByLine } = require("../helper")
let lines = readFileByLine("input", "05")
let count = 0
for (const string of lines) {
    const vowels = string.match(/[aeiou]/g)
    const nice = vowels && vowels.length >= 3 && containsTwoCharsInRow(string) && !string.match(/ab|cd|pq|xy/gm)
    nice && count++
}
console.log(count)
function containsTwoCharsInRow(string) {
    let prevChar
    for (const char of string) {
        if (char === prevChar)
            return true
        prevChar = char
    }
    return false
}
let part2Count = 0
for (const string of lines) {
    const nice = containsTwoCharsInRowNoRepeates(string) && oneLetterBetween(string)
    nice && part2Count++
}
console.log({ part2Count })
function containsTwoCharsInRowNoRepeates(string) {
    for (let i in string) {
        i = Number(i)
        let target = string[i] + string[i + 1]
        let tempString = [...string]
        tempString.splice(i, i + 1)
        tempString = tempString.join("")
        // console.log({ tempString, target })
        if (string[i + 2] + string[i + 3] === target || string[i - 2] + string[i - 1] === target) {
            return false
        }
        if (tempString.includes(target)) {
            console.log({ tempString, target, i })
            return true
        }

    }
    return false
}
function oneLetterBetween(string) {
    for (const i in string) {
        if (string[i - 2] !== string[i - 1] && string[i - 2] === string[i]) {
            console.log(string[i - 2], string[i - 1], string[i])
            return true
        }
    }
    return false
}