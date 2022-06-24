const { sum, inOneHour} = require('./my-code.js')

describe('math functions', () => {
    // describe('math functions', () => {
      it('sums 2 numbers', () => {
        expect(sum(1, 2)).toBe(3)
    })
    it('sums 2 numbers', () => {
        expect(sum(2, 2)).toBe(4)
    })  
    // })
})

describe('time functions', () => {
    it('return tempo', () => {
        const realDateNow = Date.now.bind(global.Date)
        // global.Date.now = () => 0
        global.Date.now = jest.fn(() => 0)
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
        console.log(global.Date.now())
    })
})