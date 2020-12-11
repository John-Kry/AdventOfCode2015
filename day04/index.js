const md5 = require('md5')
const SECRET_KEY = "yzbqklnj"

let i = 1
const regex = new RegExp("^0{6}", "g")
while (true) {
    const hash = md5(SECRET_KEY + i)
    // console.log(hash)
    if (regex.test(hash)) {
        console.log(i, console.log(hash))
        return i
    }
    i++
}
