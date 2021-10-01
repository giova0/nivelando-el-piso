let v_dado = 0
let AguaAcumulada = 0
let AcumulaValorDos = 0
let Promedio = 0
input.onButtonPressed(Button.A, function () {
    v_dado = 0
    AguaAcumulada = 0
    AcumulaValorDos = 0
    for (let index = 0; index < 7; index++) {
        if (v_dado == 2) {
            AcumulaValorDos = AcumulaValorDos + 1
        }
        v_dado = randint(0, 6)
        AguaAcumulada += v_dado
    }
    Promedio = AguaAcumulada / 7
    basic.showNumber(Promedio)
    basic.showNumber(AcumulaValorDos)
})
