"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fatorial_1 = require("./Fatorial");
console.log("n-fatorial");
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log('numero é: ', num);
console.log(`O fatorial de ${num} é igual a ${Fatorial_1.fatorial(num)}`);
console.log("Caminho onde node vai procurar");
console.log(module.paths);
console.log("Atualiza com -w.");
//# sourceMappingURL=main.js.map