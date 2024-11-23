class Calculadora {
    somar(a,b){
        return a+b
    }
    subtrair(a,b){
        return a-b
    }
    multiplicar(a,b){
        return a*b
    }
    dividir(a,b){
        if (b === 0) throw new Error("Não pode dividir por zero")
        return a/b
    }
}

module.exports = Calculadora