function converteStringParaArray(frase) {
    
/*
Complete o código abaixo atribuindo na variável resultado
o valor de acordo com as regras do exercício
*/
    
var resultado = []
    for (var indice = 0; indece < frase.length; indice++) {
        resultado.push(frase[indice]);
    }
        
        
        
return resultado;
}
    
function main() {
 const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
const frase = readLine();
    
const result = converteStringParaArray(frase);
    
ws.write(result.join('\n') + '\n');
    
ws.end();
}