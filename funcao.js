function validacao() {
    let boleto = document.querySelector("#boleto").value
    var boletoNumeros = boleto.replace("/", "")
    var boletoNumeros = boleto.replace("-", "")
    var boletoNumeros = boleto.replace(/\s/g, "")
    var boletoNumeros = boleto.replace(/( |\.)/g, '');
    var numerosBoleto = []
    // var boleto = form.getValue("boleto")

    var valor = []
    var count = 0
    for (var numeros of boletoNumeros) {
        valor[count] = numeros
        count++
    }
    if (boletoNumeros.length == 47) {
        var somaTot = 0
        for (let cont = 0; cont <= valor.length - 1; cont++) {
            let multiplicadores = [8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            let multiplicacao = multiplicadores[cont] * valor[cont]
            somaTot = somaTot + multiplicacao
        }
        somaTot = somaTot % 11
        var dac = 11 - somaTot
        console.log(somaTot)
        console.log(dac)
    }if (boletoNumeros.length == 4) {
        var somaTot = 0
        for (let cont = 0; cont <= valor.length - 1; cont++) {
            let multiplicadores = [8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            let multiplicacao = multiplicadores[cont] * valor[cont]
            somaTot = somaTot + multiplicacao
        }
        somaTot = somaTot % 11
        var dac = 11 - somaTot
        console.log(somaTot)
        console.log(dac)
    }
}
// 23793.38128 60063.611556 40000.063301 5 86890000002000
// 34196.16670.00001.234511 01234.567880 0 57123457000