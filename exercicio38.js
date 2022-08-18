function ehPalindromo(palavra) {
    
/*
Complete o código abaixo para verificar se varíavel `palavra` é um palíndromo ou não.Caso seja um palíndromo, a função deve retornar` SIM, SOU UM PALÍNDROMO`, se não é um palídromo a função deve retornar `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
*/ 
var palindromo = "";
for(var indice = palavra.length - 1; indice >= 0; indice--){
    palindromo += palavra[indice]
}
if (palavra == palindromo) {
    return "SIM, SOU UM PALÍNDROMO"
} else {
    return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
}
}
    
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const palavra = readLine();
    
    const result = ehPalindromo(palavra);
    
    ws.write(result + '\n');
    
    ws.end();
}