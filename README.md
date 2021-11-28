# Louvarei - backend

### Sobre o Projeto
> O projeto entitulado Louvarei é um dos projetos de uma comunidade de código aberto da [Igreja Cristã Maranata](https://www.igrejacristamaranata.org.br/) que não tem nenhuma relação direta com a instutuição. Trata-se de um projeto criado e mantido por membros.

Louvarei, é uma plataforma em desenvolvimento com o objetivo de trazer a coletânea para um app e desktop com diversas funcionalidades em plano e que virão futuramente.
O diferencial do Louvarei será a possibilidade dos membros incluirem/cifrar/corrigir um louvor sem qualquer conhecimento técnico de informática ou programação.
> Atualizações trarão mais detalhadas as funcionalidades e novidades que estarão sendo desenvolvidas.

### Como usar?
O plataforma está em *Beta* e com funcionalidades restritas a membros com autorização para modificar.
> Esse repositório trata-se do servidor da plataforma.
> [Clique aqui](https://github.com/maranata-oss/louvarei-frontend) para acessar o repositório da plataforma.

## Para desenvolvedores:

### Plugins
Certifique-se de ter instalado e configurados corretamente os plugins:
* Eslint
* Prettier
* Editorconfig
* Prisma

### Como rodar o servidor
As tecnologias empregadas nesse repositório são:
* TypeScript (NodeJS)
* ExpressJS
* Postgresql
* Prisma (ORM)
* Docker

> Esse guia assume que o usuário que estiver testando saiba usar o Git CLI, NodeJS e as dependências listadas.

Após baixar o repositório, é necessário instalar as dependências. Ainda não foram identificados bugs com nenhum gerenciador de pacotes, podendo ser usado o `npm`, `yarn` e `pnpm`.

Após a instalação das dependências, será necessário iniciar o Postgresql.
> Recomendamos utilizar o docker

#### Instalação do Postgresql usando docker
A instalação do Postgresql usando Docker é bem simples, basta ter o Docker instalado e iniciado para poder usar o comando no terminal:
```
$ docker run --name pg -p 5432:5432 -e POSTGRES_PASSWORD=docker -d -t postgres
```
Alterando o parâmetro POSTGRES_PASSWORD para a senha desejada.
> O arquivo `.env` não será incluída nos commits do git sendo necessário que o desenvolvedor crie seu próprio arquivo seguindo o modelo abaixo e substituindo os campos:

`.env`
```
NODE_ENV=development
DATABASE_URL="postgresql://postgres:docker@localhost:5432/louvarei?schema=public"

# Preencha os campos abaixos utilizando as credenciais do servidor de email SMTP. Recomendamos o uso do Mailtrap
SMTP=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=
SMTP_PASS=

```

#### Iniciando o servidor
Após concluir esses processos, o próximo passo é iniciar o servidor usando o script `dev`:
```
$ npm dev
$ yarn dev
$ pnpm dev
```

## Cuidados

### Evite Overengineering
Sim, gostamos de uma arquitetura limpa, mas não somos fissurados em manter uma arquiterua forte, apenas seguimos um padrão que seja fácil de revisar e manter.

### Confira se o seu código estará de acordo com o nosso styleguide
Para poder garantir que está de acordo, rode o comando abaixo responsável por formatar o código:
```
$ yarn lint
```

### Faça commits usando o [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)
Se você não está acostumado a usar esses padrões de commits, dê uma estudada sobre eles.
Infelizmente, *Pull Requests* que não usarem esses padrões serão recusados.
> Faça os seus commits em português.

## Pull Requests
* Faça os seus PRs sempre utilizando os padrões descritos anteriormente;
* Preserve uma boa arquitetura mantendo a arquitetura existente no projeto;
* Dê um bom título e uma boa descrição para os seus PRs; e
* Não esqueça de conferir para qual branch fará os PRs, sempre usaremos a branch `development`;
