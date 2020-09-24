function factorizar(num) {
    var resultado = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      resultado *= num;
    }
    return resultado;
  }
console.log(factorizar(5));