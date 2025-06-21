# Film Finder

## Descrição do Projeto

O **Film Finder** é uma aplicação web interativa desenvolvida como parte do **Career path Back-End Engineer** de *CodeCademy*, reestruturada como um projeto Vite Vanilla JS para facilitar a hospedagem na Vercel e permitir fácil visualização do projeto funcional. Este projeto permite aos usuários explorar e obter recomendações de filmes aleatórios com base em diferentes gêneros. Se você está procurando o que assistir em seguida, o Film Finder oferece uma maneira fácil e divertida de descobrir novos conteúdos, permitindo que você "goste" ou "não goste" de um filme para obter uma nova sugestão.

[Acesse o Film Finder online](https://film-finder-tau-ruddy.vercel.app)

---

## Funcionalidades

- **Seleção de Gênero:** Escolha entre uma lista de gêneros de filmes para refinar suas recomendações.
- **Recomendações Aleatórias:** Obtenha sugestões de filmes aleatórios com base no gênero selecionado.
- **Interação de Gosto/Não Gosto:** "Curta" ou "Descurta" um filme para solicitar uma nova recomendação, mantendo o fluxo de descoberta contínuo.
- **Integração com TMDB API:** Utiliza a API do The Movie Database (TMDB) para buscar informações de filmes e gêneros.
- **Design Minimalista:** Interface com CSS básico para um visual limpo e funcional, incluindo uma imagem de pipoca personalizada no título.

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js (LTS recomendado) instalado
- Um gerenciador de pacotes (npm ou Yarn)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com a internet para acessar a API do TMDB

### Obtenção da Chave da API (TMDB)

1. **Crie uma conta no The Movie Database:**  
  Acesse [TMDB](https://www.themoviedb.org/) e registre-se. Verifique seu e-mail após o cadastro.

2. **Solicite uma Chave de API:**  
  - Faça login, clique no seu ícone de usuário e vá em "Settings" (Configurações).
  - Na seção "API", clique em "Request an API Key" (Solicitar uma Chave de API) para se registrar como Desenvolvedor.
  - Preencha as informações solicitadas (endereço, telefone).
  - Quando solicitado a fornecer uma URL para o site onde você usará esta API.

3. **Salve sua Chave de API em um arquivo `.env`:**

---

## Configuração do Projeto

1. **Clone ou Baixe o Repositório:**  
  Obtenha os arquivos do projeto.

2. **Instale as Dependências:**  
  No terminal, execute:
  ```bash
  npm install
  # ou
  yarn install
  ```

3. **Crie o arquivo `.env`:**  
  Na raiz do projeto, crie um arquivo chamado `.env` e adicione sua chave de API:
  ```
  VITE_TMDB_API_KEY=sua_chave_de_api_aqui
  ```

4. **Inicie o Servidor de Desenvolvimento:**  
  No terminal, execute:
  ```bash
  npm run dev
  # ou
  yarn dev
  ```
  O Vite iniciará um servidor de desenvolvimento e abrirá o projeto no navegador.

---

## Estrutura do Projeto

- **index.html:** Ponto de entrada principal da aplicação. Contém a estrutura básica da página e um elemento `#app` para injeção dinâmica do conteúdo.
- **main.js:** Arquivo JavaScript principal.
  - Injeta o HTML inicial na `div#app`.
  - Faz requisições à API do TMDB (`getGenres`, `getMovies`, `getMovieInfo`).
  - Gerencia o fluxo de exibição de filmes (`showRandomMovie`).
  - Define manipuladores de eventos para os botões "Let's Play!", "Like" e "Dislike".
  - Acessa variáveis de ambiente via `import.meta.env.VITE_TMDB_API_KEY`.
- **helpers.js:** Funções auxiliares para manipulação do DOM e lógica de exibição.
  - Exporta funções como `populateGenreDropdown`, `getSelectedGenre`, `clearCurrentMovie`, `getRandomMovie`, `displayMovie`.
  - Funções internas privadas para criação de elementos e exibição.
- **style.css:** Estilização básica da aplicação.
- **.env:** Armazena variáveis sensíveis (não versionado).

---

## Detalhes Técnicos e Interações com a API

- **Requisições HTTP assíncronas:** Uso de `async/await` para interagir com a API do TMDB.
- **Variáveis de Ambiente:** A chave da API é acessada via `import.meta.env.VITE_TMDB_API_KEY`.
- **Injeção Dinâmica de HTML:** Interface construída dinamicamente em `main.js` e injetada em `<div id="app">`.
- **Seleção de Elementos DOM:** Elementos como `playBtn`, `likeBtn` e `dislikeBtn` são selecionados após a injeção do HTML.
- **Event Handlers:**
  - "Let's Play!" aciona `showRandomMovie()`.
  - "Like" e "Dislike" limpam o filme atual e chamam `showRandomMovie()` novamente.
- **Estrutura de Funções:** Funções organizadas entre `main.js` (lógica principal) e `helpers.js` (auxiliares), promovendo modularidade.

---

## Endpoints da API Utilizados

- `GET /genre/movie/list`: Busca a lista de gêneros de filmes.
  - Parâmetros: `api_key`
- `GET /discover/movie`: Busca filmes por gênero.
  - Parâmetros: `api_key`, `with_genres`
- `GET /movie/{movie_id}`: Busca detalhes de um filme.
  - Parâmetros: `api_key`

---

## Agradecimentos

Projeto desenvolvido como parte do **Career path Back-End Engineer** de *CodeCademy*. Agradecimentos aos recursos e orientações fornecidas.
