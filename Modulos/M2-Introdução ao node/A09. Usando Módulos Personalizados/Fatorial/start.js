//(function (exports, require, module, __filename, __dirname))

console.log("ID 2 => ")
console.log(module.id)

const fatorial = (num) => {7
    if(num === 0) {
        return 1
    }

    return num * fatorial (num-1)
}

//Exporta tudo
//exports.fatorial = fatorial

//Exporta só a função fatorial
module.exports = fatorial

//Outro modo de exportar, mais usado
/* 
module.exports = {
    fatorial,
}
 */