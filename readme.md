# 🎙️ Podcast Manager

Um app ao estilo **Netflix**, onde você pode **centralizar e organizar episódios de podcasts em vídeo** separados por categorias.

---

## 📌 Descrição

O **Podcast Manager** tem como objetivo oferecer uma forma simples de listar e filtrar episódios de podcasts em vídeo.  
Cada episódio pode ser exibido em sessões categorizadas (como saúde, fitness, mentalidade, humor, etc.), facilitando a navegação e descoberta de novos conteúdos.

---

## 🌍 Domínio

- Podcasts em **vídeo**
- Organização em **categorias**
- API REST em **Node.js + TypeScript**

---

## 🚀 Features

- **Listagem de episódios** por categorias
  - Exemplo: Saúde, Fitness, Mentalidade, Humor
- **Filtro de episódios** por nome do podcast
- Retorno dos dados via **API REST (JSON)**

---

## 📂 Estrutura de Dados

Exemplo de resposta JSON da API:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "aswWasd387A",
    "category": ["health", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "Outro Episódio",
    "videoId": "xyz123",
    "category": ["mentalidade", "humor"]
  }
]
```

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [tsx](https://github.com/esbuild-kit/tsx) → para rodar TypeScript diretamente
- [tsup](https://tsup.egoist.dev/) → para build do projeto

---

## ⚙️ Scripts disponíveis

Do `package.json`:

```bash
# Rodar servidor em desenvolvimento
npm run start:dev

# Rodar servidor com watch (hot reload)
npm run start:watch

# Gerar build para produção
npm run dist

# Rodar servidor buildado
npm run start:dist
```

---

## 📡 Endpoints da API

### **Listar episódios**
```http
GET /api/podcasts
```

Retorna todos os episódios cadastrados.

---

### **Filtrar episódios por podcast**
```http
GET /api/filter?p=flow
```

Retorna episódios filtrados pelo nome do podcast.

---

## 📌 Como rodar o projeto

1. Clone este repositório
   ```bash
   git clone https://github.com/joaoandrade07/node-ts-api-without-framework-podcast-manager.git
   cd podcast-manager
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina a porta:
   ```env
   PORT=3000
   ```

4. Rode o servidor em desenvolvimento:
   ```bash
   npm run start:dev
   ```

5. Acesse a API em:
   ```
   http://localhost:3000
   
   ```

---

## 📜 Licença

Este projeto está sob a licença **ISC**.  
Sinta-se livre para contribuir ou adaptar para seus próprios projetos!