describe("Suite de Testes de Adição", function () {
    var Calculadora = require('../../src/js/calculadora.js');

    it("Deve retornar 2 para 6 e 3", function () {
        expect(Calculadora.dividir(6, 3)).toEqual(2);
    });
    it("Deve retornar 2 para 6 e 3 no formato String", function () {
        expect(Calculadora.dividir("6", "3")).toEqual(2);
    });
    it("Deve retornar 1,5 para 4.5 e 3 no formato String", function () {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });
    it("Deve retornar 1,5 para 4.5 e 3 no formato String", function () {
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });
    it("Deve retornar Error para divisão por Zero", function () {
        expect(Calculadora.dividir(5, 0)).toEqual('Erro');
    });
    it("Deve retornar Zero para valor 1 inválido", function () {
        expect(Calculadora.dividir(undefined, 5)).toEqual(0);
    });
    it("Deve retornar Zero para valor 2 inválido", function () {
        expect(Calculadora.dividir(1, undefined)).toEqual(0);
    });


});