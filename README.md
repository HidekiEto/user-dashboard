# Dashboard de Usuários

Projeto de PW - UserDashboard

## Descrição

Este projeto é um dashboard de usuários desenvolvido em React, com backend simulado usando JSON Server. Ele exibe uma lista paginada de usuários, permite visualizar detalhes em modal e acessar uma página dedicada para cada usuário.

## Funcionalidades

- Listagem de usuários com paginação
- Visualização rápida dos detalhes do usuário em um modal
- Página individual de detalhes do usuário
- Backend fake com dados gerados automaticamente

## Tecnologias Utilizadas

- React
- Vite
- JSON Server
- @faker-js/faker (para geração de dados fake)
- Lodash

## Como rodar o projeto

1. **Clone o repositório e instale as dependências:**
   ```sh
   npm install
   ```

2. **Gere os dados fake:**
   ```sh
   cd backend
   node generate.js
   cd ..
   ```

3. **Inicie o backend (JSON Server):**
   ```sh
   npm run start
   ```
   O backend estará disponível em `http://localhost:3001/peoples`.

4. **Inicie o frontend:**
   ```sh
   npm run dev
   ```
   O frontend estará disponível em `http://localhost:5173` (ou porta indicada pelo Vite).

## Estrutura de Pastas

- `src/` - Código fonte do frontend React
  - `components/` - Componentes reutilizáveis (UserCard, UserDetail, Pagination, etc)
  - `styles/` - Arquivos de estilo CSS
- `backend/` - Scripts e base de dados fake (db.json)
- `public/` - Arquivos estáticos

## Scripts Disponíveis

- `npm run dev` - Inicia o frontend em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza build de produção localmente
- `npm run start` - Inicia o backend (JSON Server)

## Observações

- Certifique-se de que o backend está rodando antes de iniciar o frontend.
- Os dados dos usuários são gerados automaticamente pelo script `backend/generate.js`.

---
