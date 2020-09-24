var numero = 4;

function parImpar(numero) {
    if(numero % 2 == 0) {
      return numero + " es un numero par";
    }
    else {
      return numero + " es un numero impar";
    }
  }
console.log(parImpar(numero));