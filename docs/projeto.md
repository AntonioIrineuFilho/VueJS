# Criar e configurar projeto

## Requisitos

- **Node.js** -> Runtime (ambiente de execução) que permite rodar códigos JS fora do navegador. Necessário para build dos arquivos .vue em código interpretável pelo navegador

- **NPM** -> Node Package Manager, gerenciador de pacotes do Node para baixar dependências e bibliotecas JS

## Criar e configurar

```
>> Baixar Node + NPM

>> cd <diretório onde a pasta do projeto irá ficar>

>> npm create vue@latest

>> Preencher as requisições do projeto(nome, dependências), a principal é o Router

>> cd <projeto criado>

>> npm install

>> npm run format

>> npm run dev
```

- É interessante selecionar o **prettier** e o **eslint** ao configurar o projeto, além de ter as extensões no VSCode

## Estrutura

- **App.vue** -> Página principal, a partir dela outras páginas são chamadas e normalmente mantém um layout fixo(como um header e um footer fixos para as outras páginas)

- Pasta **components** -> Todos os componentes utilizados por outros componentes(navbar, card, form)

- Pasta **views** -> Todas as "outras páginas", atuam como componentes que podem ser chamadas por meio de um router ou router-link(roteamento dinâmico, sem recarregar a página)

- Pasta **routers** -> Onde ficam os arquivos de definição das rotas de cada view, podendo ser arquivo único para definição das rotas(tal qual urls.py) ou arquivos que classificam rotas da mesma natureza(para projetos grandes)