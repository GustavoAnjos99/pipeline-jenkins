const assert = require("assert")
const Calculadora = require("../calculadora")

describe("Calculadora", () => {
    let calc

    beforeEach(() => {
        calc = new Calculadora()
    })

    it("Deve somar dois numeros corretamente", () => {
        const resultado = calc.somar(5,3)
        assert.strictEqual(resultado, 8)
    })
    it("Deve subtrair dois numeros corretamente", () => {
        const resultado = calc.subtrair(5,3)
        assert.strictEqual(resultado, 2)
    })
    it("Deve multiplicar dois numeros corretamente", () => {
        const resultado = calc.multiplicar(5,3)
        assert.strictEqual(resultado, 15)
    })
    it("Deve dividir dois numeros corretamente", () => {
        const resultado = calc.dividir(10, 5)
        assert.strictEqual(resultado, 2)
    })
    it("Deve lançar um erro ao dividir por zero", () => {
        assert.throws(() => calc.dividir(10,0), /Não pode dividir por zero/)
    })
})