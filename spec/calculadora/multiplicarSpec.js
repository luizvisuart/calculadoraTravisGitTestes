describe("Suite de Testes de Multiplicação - ", function () {
    var Calculadora = require('../../src/js/calculadora.js');

    it("Deve retornar 12 para 6 e 2 - ", function () {
        expect(Calculadora.multiplicar(6, 2)).toEqual(12);
    });
    it("Deve retornar 12 para 6 e 2 no formato String - ", function () {
        expect(Calculadora.multiplicar("6", "2")).toEqual(12);
    });
    it("Deve retornar 13 para 6.5 e 2 no formato Stringa - ", function () {
        expect(Calculadora.multiplicar(6.5, 2)).toEqual(13);
    });
    it("Deve retornar Zero para valor 1 inválido", function () {
        expect(Calculadora.multiplicar(undefined, 5)).toEqual(0);
    });
    it("Deve retornar Zero para valor 2 inválido", function () {
        expect(Calculadora.multiplicar(1, undefined)).toEqual(0);
    });

});