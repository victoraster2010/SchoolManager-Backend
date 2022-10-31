# School Manager API(Simulador de gerenciamento de escola)

## Sobre a aplicação
-Está aplicação simula uma api backend com sequelize capaz de se conectar
com banco postgres e MySql, Foram usadas as tecnologias, NodeJS, Express,
Typescript com classes, Sequelize.
-Desafios no momento está sendo regras de negócio de escolas, Após uma 
busca na internet vi diversas regras de escolas diferentes e um mesclado dessas
está sendo formada por mim desde 31/10/2022.
## Padrão de arquitetura
Seguindo a arquitetura MSC
 --Model=database é a pasta dos models e entidades do sequelize, bem como migrations e seeders
 --Service é a pasta onde acontecem regras de negócio uma classe para cada entidade
 -- controller é a pasta dos controladores de requisição, Recebem a requisição e respondem

## Rodando o projeto
É necessário ter uma instancia postgres rodando em seu ambiente
 incluir no .env da raiz do projeto as váriaveis
``` 
DB_USER=myusername # usuário do banco
DB_PASS=mypassword # senha do banco
DB_HOST=localhost # caso a instancia do banco seja externa altere esta linha
DB_PORT=5455  #porta do banco geralmente é a 5433
DB_NAME=schoolManager #não é necessário alterar isso
APP_PORT=3001 # mudar caso for rodar uma instancia na nuvem

```
## Rodando PostgresSQL com uma instancia Docker 
 Pode alterar o --name para outro nome, bem como USER e PASSWORD, sobre as portas, 
 em alguns ambientes Linux em minha experiência eu tive que espelhar a porta externa para outra a 5455, devido a uma questão de driver do pacote PG que este projeto usa para conectar o sequelize ao banco, caso tenha esse problema de conexão mude o para -p 5455:5432 para mapear a porta sem conflitos

``` 
docker run --name postgresql -e POSTGRES_USER=myusername -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -v /data:/var/lib/postgresql/data -d postgres


```
## Configuração Docker cortesia da hevodata

[Hevodata](https://hevodata.com/learn/docker-postgresql/)

## Rodando o projeto
Após clonar o projeto:
Instale as dependências:

``` 
npm install
```
Execute a ~transpilaçao~ Compilação de typescript para javascript
```
npm run build
```

Crie o banco
```
npx sequelize-cli db:create
``` 
Rode as Migrations
```
npx sequelize-cli db:migrate
```
Rode o projeto 
```
npm start
```
Rotas acessíveis no momento: GET "/classes", GET "/classes/:year" e POST "/classes/"
use o Insominia, Thunderclient, Postman ETC com o link http://localhost:APP_PORT/classes
No caso APP_PORT o valor colocado no seu .env
## Agradecimentos
 Conhecimentos aprendidos na Trybe, Middleware de erro também da trybe.