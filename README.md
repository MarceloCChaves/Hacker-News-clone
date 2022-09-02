# Teste Mentorise

## 🎯 Objetivo
O objetivo da aplicação é construir um clone simples do Hacker News que atenda as seguintes funcionalidades:

- Eu como usuário gostaria de ver a lista de threads na página inicial com nome e
quantidade de respostas, paginadas de 20 em 20.
- Eu como um usuário quero poder clicar no nome da thread ou no botão de detalhes
para ser redirecionado a página da thread.
- Eu como um usuário quero poder clicar no número de respostas de uma thread e irei
ser redirecionado direto para a primeira resposta dela.
- Eu como usuário gostaria de ver na página de uma thread o nome do autor, a
descrição e a data de criação dela no topo e as respostas abaixo, paginadas de 20
em 20. Cada resposta deve conter o nome do autor, conteúdo e data de criação.
- Eu como um usuário quero poder criar e responder a threads sem nenhum tipo de
autenticação, basta fornecer meu nome na criação e resposta obrigatoriamente junto
com o conteúdo.
- Eu, como usuário, quero poder deletar uma thread (não precisa verificar se é o
criador). Todas as respostas devem ser deletadas junto.
- Eu, como usuário, quero poder deletar uma resposta (não precisa verificar se é o
criador).
- Eu como usuário quero poder editar uma thread (qualquer uma, não há
autenticação).
- Eu como usuário quero poder editar uma resposta.
- Adicionar sistema de login aos estágios de criação, edição e deleção de threads.

## 💻 Preview

![Preview](https://user-images.githubusercontent.com/62251064/188039971-7903481f-d647-4502-8c9c-232b96fc2a81.png)


## 🛠 Tecnologias utilizadas

- Reactjs
- Json server

## 📁 Clonando o Repositório
- Abra o terminal da sua IDE digitando os comandos seguindo o passo a passo abaixo
```
git clone https://github.com/MarceloCChaves/Teste-mentorise.git
npm install
npm start
```
- No arquivo package.json, caso não exista, vá em "scripts" e insira o seguinte comando abaixo:
```
"server": "json-server server.json -w --port 3333"
```
- Por fim, abra outro terminal e escreva o comando para rodar o json server
```
yarn server
```

## 👨 Autor
---

<a href="https://github.com/MarceloCChaves">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62251064?s=400&u=b1c8da11d91445ccb2d97b709ccbcd0524885d98&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Marcelo Chaves</b></sub></a> <a href="https://avatars.githubusercontent.com/u/62251064?s=400&u=b1c8da11d91445ccb2d97b709ccbcd0524885d98&v=4" title="Marcelo">🚀</a>


Feito com ❤️ por Marcelo Chaves 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Marcelo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcelocchaves/)](https://www.linkedin.com/in/marcelocchaves/) 
[![Gmail Badge](https://img.shields.io/badge/-Marcelochaves20000@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:Marcelochaves20000@gmail.com)](mailto:Marcelochaves20000@gmail.com)
