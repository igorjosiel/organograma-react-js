# 🗂️ Organograma

Este projeto foi desenvolvido utilizando [Vite](https://vitejs.dev/) como ferramenta de build 
e empacotamento, em conjunto com [React](https://react.dev/) para construção da interface.

---

## 📦 Informações do Projeto

- **Nome do pacote:** `organograma`
- **Versão:** 0.0.0
- **Privado:** Não

---

## 🎛️ Scripts Disponíveis

Você pode executar os seguintes comandos no terminal:

| Comando             | Descrição                                                 |
|---------------------|-----------------------------------------------------------|
| `npm run dev`       | Inicia o servidor de desenvolvimento                      |
| `npm run build`     | Gera a versão de produção do projeto                      |
| `npm run preview`   | Visualiza a build de produção localmente                  |
| `npm run lint`      | Executa o ESLint para análise de código                   |

---

## 📚 Dependências

- [React](https://react.dev/) `^19.1.0`
- [React DOM](https://react.dev/reference/react-dom) `^19.1.0`

---

## 🖥️ Ambiente de Desenvolvimento

- **Node.js:** v20.19.3
- **npm:** 10.8.2

---

## 🛠️ Conceitos Utilizados

O projeto explora diversos conceitos fundamentais do desenvolvimento moderno com React:

### 🧩 Componentes
Estruturas reutilizáveis que representam partes da interface.
Cada componente pode conter seu próprio estado e lógica.

🔗 [Documentação: Componentes](https://react.dev/learn/your-first-component)

---

### ⚙️ Estado (State)
Permite que componentes controlem e armazenem informações dinâmicas.

🔗 [Documentação: Estado](https://react.dev/learn/state-a-components-memory)

---

### 📬 Propriedades (Props)
Valores passados de um componente pai para um componente filho, possibilitando configuração dinâmica.

🔗 [Documentação: Props](https://react.dev/learn/passing-props-to-a-component)

---

### 📝 Listas e Chave (key)
Renderização de listas de elementos utilizando a propriedade `key` para identificar cada item.

🔗 [Documentação: Renderizando Listas](https://react.dev/learn/rendering-lists)

---

### 🖱️ Eventos
Tratamento de eventos como cliques e entradas de formulário.

🔗 [Documentação: Manipulando Eventos](https://react.dev/learn/responding-to-events)

---

### 🧭 SPA (Single Page Application)
O projeto segue o conceito de SPA, proporcionando navegação e atualização de conteúdo sem recarregar a página inteira, resultando em uma experiência de usuário mais fluida e rápida.

🔗 [Sobre SPA no React](https://react.dev/learn/start-a-new-react-project#single-page-apps)

---

### 🎛️ Componentes Controlados e Não Controlados
- **Controlados:** Formulários que mantêm o valor no estado React.
- **Não Controlados:** Formulários que utilizam referências diretas ao DOM.

🔗 [Documentação: Componentes Controlados](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components)

---

## 🎨 Inclusão de CSS

Você pode importar CSS diretamente nos componentes ou no ponto de entrada da aplicação.

Exemplo de importação:

```javascript
import './App.css';
```

---

## 🚀 Iniciando o projeto e instalando as dependências
Instale as dependências

npm install ou yarn install

Inicie o servidor de desenvolvimento

npm run dev ou yarn dev

Abra no navegador

http://localhost:5173

🌐 Links úteis

Documentação oficial do React
https://react.dev/

Documentação do Vite

https://vite.dev/guide/

Introdução ao JSX

https://react.dev/learn/writing-markup-with-jsx

Hooks do React

https://react.dev/reference/react