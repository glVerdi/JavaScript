function comparaStrings(primeiraString, segundaString) {
  
/*
 Complete o código abaixo atribuindo na variável resultado a concatenação das strings 'primeiraString' e segundaString' de acordo com as regras do exercício.
*/
    
var resultado;
if (primeiraString.length >= segundaString.length) {
    resultado = segundaString + primeiraString;
} else {
    resultado = primeiraString + segundaString;
}
        
return resultado;
}