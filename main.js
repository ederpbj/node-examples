console.log("n-fatorial");
console.log('Nome do arquivo: ',process.argv[1]);
/*
console.log(`Executando o script a partir do diretório ${process.cwd()}`);

process.on('exit', ()=>{
    console.log('script esta prestes a terminar')
})
*/


//Arqumentos utilizados para startar o script
//console.log(process.argv)

const num = parseInt(process.argv[2]);

console.log('numero é: ',num)
console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);