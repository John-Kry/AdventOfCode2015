const { readFileByLine } = require("../helper")
const lines = readFileByLine("input", "02")
console.log(lines)
let total = 0
let totalRibbons = 0
for (const line of lines) {
    let [l, w, h] = line.split("x")
    // let [l, w, h] = [1, 1, 10]
    const side1 = l * w
    const side2 = w * h
    const side3 = h * l
    const tmpTotal = side1 * 2 + side2 * 2 + side3 * 2 + Math.min(side1, side2, side3)
    total += tmpTotal

    const [p1, p2] = [l, w, h].sort((a, b) => a - b)

    const smallestPerimeter = p1 * 2 + p2 * 2
    const bow = l * w * h
    const ribbon = smallestPerimeter + bow
    // console.log(ribbon)
    totalRibbons += ribbon
}
console.log({ total, totalRibbons })