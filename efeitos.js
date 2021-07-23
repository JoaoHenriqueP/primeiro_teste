if (boletoNumeros.length == 47) {
        var somaTot = 0
        for (let cont = 0; cont <= valor.length - 1; cont++) {
            let multiplicadores = [8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            let multiplicacao = multiplicadores[cont] * valor[cont]
            somaTot = somaTot + multiplicacao
        }
    }
