const matriz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = matriz
  .filter(num => num % 2 === 0) 
  .map(num => num * 3);         
console.log(resultado); 