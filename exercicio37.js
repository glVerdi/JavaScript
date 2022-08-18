function buscaNumeroPrimos(n) {
    
/*
Escreva um código que encontre todos os números primos entre 0 e n e coloque-os num array chamado`numerosPrimos`(você deve criar esse array)
*/
    var numerosPrimos = [2, 3];
    for(var numerAtual = 4; numerAtual < n; numerAtual++){
        var quantidadeDeDivisores = 0;
        for(var numeroMenor = 2; numeroMenor < numerAtual; numeroMenor++) {
            if (numerAtual % numeroMenor  == 0) {
                quantidadeDeDivisores++;
            }
        }
        if (quantidadeDeDivisores == 0) {
            numerosPrimos.push(numerAtual);
        }
    } 
return numerosPrimos;
}