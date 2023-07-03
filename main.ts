basic.clearScreen()
let tijd = 100
let getal = 0
let X = randint(0, 4)
let Y = 4
basic.forever(function () {
    basic.clearScreen()
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        basic.pause(tijd)
        led.unplot(X, Y)
        Y += -1
    }
    for (let index = 0; index < 5; index++) {
        Y += 1
        led.plot(X, Y)
        basic.pause(tijd)
        led.unplot(X, Y)
    }
    for (let index = 0; index < 5; index++) {
        led.plot(X, Y)
        basic.pause(tijd)
        Y += -1
    }
    for (let index = 0; index < 5; index++) {
        led.unplot(X, Y)
        basic.pause(tijd)
        Y += 1
    }
    X = randint(0, 4)
})
