<h2 align="center"> 
    🚀 Cypress test automation api 🚀
</h2>

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

---

## 📝 Sobre
Projeto de teste de API com Cypress onde validamos a criação, alteração e exclusão de um usuário.
>>obs: Baseado no desafio proposto, os testes estão sob a ótica de end2end logo eles não possuem independência, então os dados gerados/extraídos de um teste são utilizados nos próximos testes. Vale dizer que poderíamos também tornar os testes independentes onde cada teste seria responsável por gerar a massa, realizar as ações propostas e então retornar a massa ao estado inicial, o que forneceria independência e caso um teste falhasse, os próximos não estariam comprometidos.

---

## 🛠 Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Cypress](https://www.cypress.io/)

---

## 📂 Como baixar o projeto

Para executar o projeto é necessário a instalação do **Nodejs** no ambiente onde os testes serão executados, o download pode ser feito [aqui](https://nodejs.org/en/), e após a instação pode ser validado abrindo o terminal e executando o comando abaixo que em caso de sucesso retornará a versão instalada ex: **v12.18.3**

```bash
node -v
```

To terminal, execute os comandos abaixo:
```bash
# Clone o projeto
git clone https://github.com/RaphaelBurgarelli/api-cypress.git
```
```bash
# Acesse o diretório onde o projeto foi clonado
cd api-cypress
```
```bash
# Execute o comando abaixo para gerenciar as dependências
npm install
```
## 🔌 Executando o projeto
Após a instalação de todos os pacotes, é possível executar a interface do cypress com o comando abaixo:
```bash
# Abrir a interface do Cypress
npm run cypress:open
```
ou
```bash
npx cypress open
```
Com a interface aberta, basta clicar no arquivo **spec.js** contido no caminho ``services/Users/tests`` e então será aberto o navegador onde você poderá acompanhar as execuções e os logs.
```bash
# Executando os testes em modo headless
npm run cypress:run
```
ou
```bash
npx cypress run
```
---

## ⚙ Estrura do Projeto
```
├───integration
│   └───services
│       └───Users
│           ├───payloads
│           │       add-user.json
│           │       change-user.json
│           │
│           ├───requests
│           │       DELETE-Users.request.js
│           │       GET-User.request.js
│           │       GET-Users.request.js
│           │       POST-Users.request.js
│           │       PUT-User.request.js
│           │
│           └───tests
│                   UsersTests.spec.js
```
Como pode ser visto na árvore acima, dentro da pasta ``integration``, foi criada a pasta ``services`` onde para cada recurso é criada uma pasta e suas respectivos pastas/arquivos que são do mesmo contexto.
- Note que não temos a pasta fixtures dado que as massas utilizadas estão dentro da pasta ``payloads`` e serão usados no contexto do recurso Users

Desenvolvido 💚 por Raphael Burgarelli