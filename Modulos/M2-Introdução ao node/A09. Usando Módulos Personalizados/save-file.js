const fs = require('fs')

const data = new Uint8Array(Buffer.from('Hello Node.js'));

fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('Arquivo salvo com sucesso!');
});