const prompt = require('prompt-sync')()
function fatorial(n) {
    if (n == 0) {
      return 1;
    } else {
      return n * fatorial(n - 1);
    }
  }
  
  const numero = Number(prompt("Digite um número: "));
  
  const resultado = fatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);