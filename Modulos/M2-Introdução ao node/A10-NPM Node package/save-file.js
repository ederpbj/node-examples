const fs = require('fs')

const argv = require('yargs')
  .alias('f', 'filename')
  .alias('c', 'content')
  .demandOption('filename')
  .demandOption('content')
  .argv

//const data = new Uint8Array(Buffer.from('Hello Node.js'));

fs.writeFile(argv.filename, argv.content, (err) => {
  if (err) throw err;
  console.log(`Arquivo ${argv.filename} salvo com sucesso!`);
});