function verificaParOuImpar(elementoA) {
        
/* 
Atribua um dos seguintes valores na variável `resultado` par:
se o valor da variável `elementoA` for par;
impar: se o valor da variável `elementoA` for ímpar;
*/
    
var resultado ;
if (elementoA % 2 === 0) {
    resultado = "par";
} else {
    resultado = "Ímpar";
}

return resultado;
}