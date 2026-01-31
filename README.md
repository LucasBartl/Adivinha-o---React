# 🎯 Adivinhação de Palavra — React

Jogo de adivinhação de palavras desenvolvido em React + TypeScript, inspirado em jogos como Forca e Word Guess.  
O objetivo é descobrir a palavra correta digitando letras, com um número limitado de tentativas.

🔗 Demo:  
https://lucasbartl.github.io/Adivinha-o---React/

---

## 🚀 Funcionalidades

- Geração aleatória de palavras
- Dicas para ajudar o jogador
- Entrada de letras com validação
- Destaque visual para letras corretas
- Controle de tentativas
- Reinício automático ao vencer ou perder
- Contador de tentativas dinâmico
- Bloqueio de letras repetidas

---

## 🧠 Regras do Jogo

- O jogador deve digitar uma letra por vez
- Cada letra só pode ser usada uma única vez
- O número máximo de tentativas é:

quantidade de letras da palavra + 5 tentativas extras

- O jogo termina quando:
- Todas as letras da palavra forem descobertas
- O número máximo de tentativas for atingido

---

## 🛠️ Tecnologias Utilizadas

- React
- TypeScript
- CSS Modules
- Vite
- GitHub Pages

---

## 📂 Estrutura do Projeto

src/
├── components/
│   ├── Header
│   ├── Letter
│   ├── LettersUsed
│   ├── Input
│   ├── Button
│   └── Tip
├── utils/
│   └── words.ts
├── App.tsx
├── main.tsx
└── styles/

---

## ▶️ Como Rodar o Projeto Localmente

1. Clone o repositório:

git clone https://github.com/lucasbartl/Adivinha-o---React.git

2. Entre na pasta do projeto:

cd Adivinha-o---React

3. Instale as dependências:

npm install

4. Inicie o projeto:

npm run dev

5. Acesse no navegador:

http://localhost:5173

---

## 📦 Build e Deploy

Para gerar a versão de produção:

npm run build

Deploy realizado utilizando GitHub Pages.

---

Se curtiu o projeto, deixa uma ⭐ no repositório!
