# Hino Nacional Brasileiro — Nossa História, Nossa Identidade

Projeto educativo desenvolvido com React, Vite, JSX, JavaScript e CSS3, conforme a atividade prática.

## Requisitos
- Node.js LTS instalado
- Visual Studio Code

## Como executar
1. Extraia o arquivo ZIP.
2. Abra a pasta `hino-nacional-react` no VS Code.
3. Abra o terminal integrado: **Terminal > Novo Terminal**.
4. Execute:
   ```bash
   npm install
   npm run dev
   ```
5. Abra no navegador o endereço local exibido pelo Vite (normalmente `http://localhost:5173`).

## Gerar versão de produção
```bash
npm run build
npm run preview
```

## Estrutura
- `src/components/`: componentes React independentes.
- `src/data/`: dados da linha do tempo, glossário, versos e perguntas do quiz.
- `src/App.jsx`: composição das seções e estados globais de acessibilidade.
- `src/style.css`: identidade visual, responsividade, acessibilidade e impressão.
- `public/img/`: diretório reservado para imagens locais (a interface possui arte vetorial em CSS).

## Personalização antes da entrega
- Em `src/components/Footer.jsx`, substitua `[Insira seu nome]` pelo seu nome ou pelos nomes da equipe.
- Confira se o vídeo incorporado está disponível. Se não abrir, substitua o ID do vídeo no `src` do iframe de `VideoHino.jsx` por um vídeo oficial adequado do YouTube.
- Revise as fontes indicadas no rodapé e complemente-as com os endereços exatos que você consultar na pesquisa.
- Teste o projeto com `npm run build` antes de entregar.

## Funcionalidades incluídas
- Cabeçalho responsivo e navegação por âncoras.
- Banner principal com identidade visual inspirada na bandeira.
- Contexto histórico e linha do tempo interativa.
- Vídeo incorporado por iframe.
- Letra com alternância entre primeira parte, segunda parte e versão completa.
- Cards sobre a importância do hino.
- Glossário interativo.
- Atividade “Monte o Hino” com níveis e botões acessíveis.
- Quiz de 10 questões, pontuação, feedback e reinício.
- Certificado simbólico após o quiz, com impressão/salvamento em PDF.
- Acessibilidade: tamanho da fonte, alto contraste, modo leitura e restauração.
- Layout responsivo para dispositivos móveis e impressão do certificado.

> Observação: o projeto não inclui `node_modules`; essa pasta é criada localmente ao executar `npm install`.
