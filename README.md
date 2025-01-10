# To-Do List Application

Uma aplicação simples de gerenciamento de tarefas, desenvolvida com Angular no frontend, Node.js no backend e MongoDB como banco de dados.

---

## 📜 Descrição do Projeto

A aplicação permite aos usuários gerenciar suas tarefas, com as seguintes funcionalidades principais:

- **Criar Tarefas**: Adicionar novas tarefas à lista.
- **Listar Tarefas**: Exibir todas as tarefas criadas.
- **Editar Tarefas**: Atualizar informações de tarefas existentes.
- **Excluir Tarefas**: Remover tarefas.

---

## 🛠 Estrutura do Projeto

### **Frontend**: Angular

- **Principais Componentes**:
  - **Task List Component**: Exibe a lista de tarefas.
  - **Task Card Component**: Card para exibir as informações tarefas.
  - **Task Dialog Component**: Formulário utilizado para criar ou editar tarefas.

### **Backend**: Node.js com Express.js

- **Função**: API REST para operações CRUD.
- **Endpoints**:
  - `GET /tasks`: Retorna todas as tarefas.
  - `POST /tasks`: Cria uma nova tarefa.
  - `PUT /tasks/:id`: Atualiza uma tarefa existente.
  - `DELETE /tasks/:id`: Exclui uma tarefa.

### **Banco de Dados**: MongoDB

- **Coleção**: `tasks`
- **Estrutura do Documento**:
  ```json
  {
    "_id": "ObjectId",
    "title": "String",
    "description": "String",
    "completed": "Boolean",
    "isActive": "Boolean"
  }
  ```

---

## 🚀 Como execultar o projeto

### No Docker:

#### Para execultar:
_(No backend do projeto)_

```bash
cd backend/

docker compose up --build
```
**_Isso iniciará o contêiner do banco de dados mongo._**


## Execultar localmente:

### Backend

- 1: Vá para a pasta backend

```bash
cd backend/
```

- 2: Instale as dependências:

```bash
pnpm i
```

- 3: Inicie o servidor backend:

```bash
pnpm run dev
```

O backend estará em: http://localhost:3333/api

### Frontend

- 1: Vá para a pasta frontend

```bash
cd frontend/
```

- 2: Instale as dependências:

```bash
npm i
```

- 3: Inicie o frontend:

```bash
npm run start

# Ou Angular CLI

ng s
```

O frontend estará em: http://localhost:4200/

---

## 📄 Estrutura de Pastas

```
todo-list /
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database/
│   │   │       └── mongo/
│   │   │           ├── models/              # Modelos do banco de dados
│   │   │           └── mongodb.ts           # Configuração do MongoDB
│   │   │
│   │   ├── http/
│   │   │   ├── routes/
│   │   │   │   ├── tasks/                   # Rotas relacionadas a tarefas
│   │   │   │   ├── error-handle.ts          # Manipulação de erros
│   │   │   │   └── routes.ts                # Arquivo principal de rotas
│   │   │
│   │   ├── utils/                           # Utilitários gerais
│   │   └── server.ts                        # Configuração e inicialização do servidor
│   │
│   └── docker-compose.yml                   # Configuração do Docker para backend
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/                        # Serviços globais
│   │   │   │   └── models/                  # Interfaces e tipos globais
│   │   │   │
│   │   │   └── modules/                     # Módulos do frontend
│   │   │       └── to-do-list/              # Módulo específico da lista de tarefas
│   │   │           ├── components/          # Componentes reutilizáveis
│   │   │           ├── services/            # Serviços específicos do módulo
│   │   │           ├── pages/               # Páginas principais do módulo
│   │   │           └── models/              # Modelos relacionados ao módulo

```