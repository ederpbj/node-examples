console.log("n-fatorial");
/*
console.log(`Executando o script a partir do diretório ${process.cwd()}`);

process.on('exit', ()=>{
    console.log('script esta prestes a terminar')
})
*/

const fatorial = (num) => {7
    if(num === 0) {
        return 1
    }

    return num * fatorial (num-1)
}

//Arqumentos utilizados para startar o script
//console.log(process.argv)

const num = parseInt(process.argv[2]);

console.log('numero é: ',num)
console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);