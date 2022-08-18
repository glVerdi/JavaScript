function imprimaQuadradoAsterisco(n) {

    /*
    Escreva nas linhas a seguir um código que imprima um quadrado de asteríscos de altura e largura igual ao valor de n
    */
            
    for (var indice = 0; indice < n; indice++) {
        var linhaDeAsteriscos = '';
        
        for (var linha = 0; linha < n; linha++) {
        linhaDeAsteriscos = linhaDeAsteriscos + '*';
        }
        
    console.log(linhaDeAsteriscos);
    }
    
    }