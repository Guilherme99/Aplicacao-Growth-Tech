# Aplicacao-Growth-Tech
Aplicaçāo desenvolvida para processo seletivo da empresa Growth Tech.

# Sobre
Uma empresa deseja realizar um monitoramento de outros grupos empresariais em um site X para analisar seus posts. Sua tarefa é criar uma simples API que captura apenas os usuários (http://jsonplaceholder.typicode.com/users) os quais a empresa em que trabalham fazem parte de um grupo e exiba seus posts (http://jsonplaceholder.typicode.com/posts) unido do nome do funcionário e sua empresa. Além disso criar uma tela para facilitar a leitura desses posts.

1. O backend obrigatoriamente precisa ser realizado com Express.js.
2. O frontend obrigatoriamente precisa ser realizado com React.js.
3. Apesar de bem simples, o projeto precisa estar pronto para produção.
4. Sinta-se à vontade para adicionar mais features e criar uma UI maneira!

# Executando a aplicação
### Observação: Como o banco de dados já está criado dentro do repositório do 
server "database/database.sqlite", siga as instruções a baixo:

## Iniciando o servidor
1. Entre dentro da pasta Server pelo terminal;
2. Execute o comando: 
> npm run dev
## Iniciando o frontend
1. Entre dentro da pasta web pelo terminal;
2. Execute o comando: 
> yarn start

## Caso queira ver o processo desde o início,apague o arquivo dentro da pasta server: "database/database.sqlite" e em seguida, abra o terminal na raiz do server e execute: 

1. npm run knex:migrate
2. npm run knex:seed
3. npm run dev

## Em seguida, entre na pasta raiz da web e inicie o servidor:
> yarn start

