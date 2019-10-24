"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const yargs = require("yargs");
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
//const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('Teste.txt', argv.content, function (err) {
    if (err)
        throw err;
    console.log(`Arquivo ${argv.filename} salvo com sucesso!`);
});
