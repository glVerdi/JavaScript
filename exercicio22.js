function determinarGeracao(anoDeNascimento) {
        
/* 
Atribua um dos seguintes valores na variável `resultado`
Geração silenciosa: para os nascidos até o ano de 1945;
Boomers: para os que nasceram depois de 1945 até 1964;
Geração X: para os que nasceram depois de 1964 até 1980;
Millennials: para os que nasceram depois de 1980 até 1996;
Geração Z: para os que nasceram depois de 1996;
*/
      
var resultado;
if (anoDeNascimento <= 1945) {
    resultado = "Geração silenciosa";
} else if (anoDeNascimento <= 1964) {
    resultado = "Boomers";
} else if (anoDeNascimento <= 1980) {
    resultado = "Geração X";
} else if (anoDeNascimento <= 1996) {
    resultado = "Millennials";
} else {
    resultado = "Geração Z";
}
    
return resultado;
}