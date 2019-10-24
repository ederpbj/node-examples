# node-examples
Exemplos com API nodejs

Iniciando aplicação NPM

	Comando para iniciar uma aplicação NPM
o	npm init -y
	Instalar pacote yargs
o	Npm i yargs –save
	--save: salva no package.json

	Executando a função após alterações
o	node main.js --num=6
o	Se não colocar o argumento da erro:
	node main.js

	Exemplo save-file, modificado
o	node save-file.js -f="Hello.txt" -c="Hello World!"

Iniciando com typescript
	npm i typescript -g

	Tsc save-file (Gera outro arquivo tipo .js a partir do .ts)
	Buscar documentação
o	https://www.npmjs.com/package/@types/node
	Instalar type/node, na lista devDependences (utiliza apenas em modo desenvolvimento)
o	npm i @types/node --save-dev

	Instalar
o	npm install --save @types/yargs -D (-D para modo desenvolvimento)

	Gerar todos .js a partir do .ts 
o	tsc --build tsconfig.json
o	tsc --build tsconfig.json -w (Permance atualizando)
	Cria diretório para geração de arquivos .js

	Testar novo arquivo gerado
o	node dist/main.js --num=10
