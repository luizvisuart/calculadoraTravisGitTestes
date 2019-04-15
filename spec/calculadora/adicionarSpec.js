describe("Suite de Testes de Adição", function () {
    var Calculadora = require('../../src/js/calculadora.js');

    it("Deve retornar 5 para 5 + 3", function () {
        expect(Calculadora.adicionar(2, 3)).toEqual(5);
    });

    it("Deve retornar 6 para 9 + -3 no formato texto", function () {
        expect(Calculadora.adicionar('9', '-3')).toEqual(6);
    });

    it("Deve retornar 4.5 para 1.5 + 3", function () {
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    it("Deve retornar 0 quando parametro 1 for inválido", function () {
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    })

    it("Deve retornar 0 quando parametro 2 for inválido", function () {
        expect(Calculadora.adicionar(2, undefined)).toEqual(0);
    })
});