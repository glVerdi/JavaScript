function retornaPrimeiroElemento(lista) {
       
/*
Complete o código atribuindo na variável `resultado` o primeiro elemento do array 'lista' se o
array não estiver vazio, ou a string 'array vazio' se o array 'lista' estiver vazio.
*/
     
 var resultado;
 if (lista.length > 0) {
     resultado = lista[0];
 } else {
     resultado = "array vazio";
 }
    
return resultado;
}