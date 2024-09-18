const matriz = [
    [1, -2, 3],
    [-4, 5, -6],
    [7, -8, 9]
  ];
  
  const somaPositivos = matriz.reduce((acumulador, vetor) => {
    const somaVetor = vetor.reduce((acumuladorVetor, numero) => {
      if (numero > 0) {
        return acumuladorVetor + numero;
      }
      return acumuladorVetor;
    }, 0);
    return acumulador + somaVetor;
  }, 0);
  
  console.log(somaPositivos);

