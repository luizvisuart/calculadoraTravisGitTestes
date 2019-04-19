var Calculadora = {
    adicionar: function (n1, n2) {
        if (validarNumeroInformado(n1, n2)) {
            return 0;
        }
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        return n1 + n2;
    },
    subtrair: function (n1, n2) {
        if (validarNumeroInformado(n1, n2)) {
            return 0;
        }
        return n1 - n2;
    },
    dividir: function (n1, n2) {
        if (n2 === 0) return 'Erro';
        if (isNaN(n1) || isNaN(n2)) return 0;
        return n1 / n2;
    },
    multiplicar: function (n1, n2) {
        return 0;
    }
};

function validarNumeroInformado(num1, num2) {
    return isNaN(num1) || isNaN(num2);
}

if (typeof module !== undefined && typeof module.exports !== 'undefined') {
    module.exports = Calculadora;
}