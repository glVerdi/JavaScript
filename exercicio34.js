function multiplicaPorDois(numeros) {

/*
Complete a função multiplicando todos os elementos do array `numeros` por dois e retornando um array com esses resultados
*/
var resultados = []
for(var indice = 0; indice < numeros.length; indice++) {
    var elementoMultiplicadoPorDois = numeros[indice] * 2
    resultados.push(elementoMultiplicadoPorDois)
}
return resultados;
}