var Calculadora = {

    ADICAO: '+',
    SUBRACAO: '-',
    DIVISAO: '/',
    MULTIPLICACAO: '*',

    adicionar: function (n1, n2) {
        return Calculadora.calcular(n1, n2, Calculadora.ADICAO);
    },

    subtrair: function (n1, n2) {
        return Calculadora.calcular(n1, n2, Calculadora.SUBRACAO);
    },

    dividir: function (n1, n2) {
        if (n2 === 0) return 'Erro';
        return Calculadora.calcular(n1, n2, Calculadora.DIVISAO);
    },

    multiplicar: function (n1, n2) {
        return Calculadora.calcular(n1, n2, Calculadora.MULTIPLICACAO);
    },

    calcular: function (n1, n2, operacao) {
        var resposta;
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        if (isNaN(n1) || isNaN(n2)) return 0;
        switch (operacao) {
            case Calculadora.ADICAO:
                resposta = n1 + n2;
                break;
            case Calculadora.SUBRACAO:
                resposta = n1 - n2;
                break;
            case Calculadora.DIVISAO:
                resposta = n1 / n2;
                break;
            case Calculadora.MULTIPLICACAO:
                resposta = n1 * n2;
                break;
            default:
                resposta = 0;
        }
        return resposta;
    }
};

if (typeof module !== undefined && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}