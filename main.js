//Importa só a função
//const fatorial = require('./Fatorial').fatorial

//importa tudo, mas foi definido export só da função
const fatorial = require('./Fatorial')

console.log("n-fatorial");
//console.log('Nome do arquivo: ',process.argv[1]);

const num = parseInt(process.argv[2]);

console.log('numero é: ',num)
console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);