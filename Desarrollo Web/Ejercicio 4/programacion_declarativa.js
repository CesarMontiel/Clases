const numeros = [1, 2, 3, 4, 5, 6];

const evalPar = n => n % 2 === 0;

console.log("Resultado:", evalPar(54 )); 

const resultado = numeros.filter(n => n % 2 === 0).map(n => n * 2);

console.log(resultado); // [4, 8, 12]