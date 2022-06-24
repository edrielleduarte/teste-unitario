const sum = (a, b) => {
    return a + b
}

// console.log(sum(2, 2))

const inOneHour = () => {

    const now = Date.now()
    // const now = 0
    const oneHourInMili = 1 * 60 * 60 * 1000
    return now + oneHourInMili
}

// console.log(inOneHour())

module.exports = {sum, inOneHour}