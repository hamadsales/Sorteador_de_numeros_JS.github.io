# 🥷 Sorteador Ninja - Manipulação de DOM

Este projeto é um gerador de números aleatórios customizado com a temática de Naruto. Ele foi desenvolvido para aplicar conceitos de lógica de programação, manipulação dinâmica de elementos HTML via JavaScript e estilização com CSS.

## 🚀 Funcionalidades

- **Sorteio Múltiplo:** Permite definir a quantidade exata de números que serão gerados de uma só vez.
- **Definição de Intervalo:** O usuário escolhe o número inicial (mínimo) e o número final (máximo) para o sorteio.
- **Sistema de Reinicialização:** Botão inteligente que limpa os campos, zera o histórico de números e restaura os padrões visuais.
- **Temática Imersiva:** Interface estilizada inspirada no universo anime, incluindo jargões e identidade visual personalizada.

## 🧠 Como o Código Funciona (Lógica de Programação)

O projeto foi estruturado seguindo um fluxo lógico focado em **automação de DOM e controle de arrays**:

1. **Mapeamento Dinâmico (Entrada):** Em vez de repetir seletores, o script usa uma função otimizada (`gerarvariaveis`) que mapeia os elementos do HTML para dentro de um objeto global chamado `variavel`.
2. **Cálculo Aleatório (Processamento):** A função `gerarNumeroAleatorio` calcula um índice randômico entre o valor mínimo e máximo usando os métodos `Math.random()` e `Math.floor()`.
3. **Laço de Repetição (Jutsu):** Ao clicar no botão principal, o programa executa um loop `for` baseado na quantidade de números solicitada, disparando o sorteador sequencialmente.
4. **Manipulação de Arrays e Saída:** O programa preenche um array, lê o valor sorteado na posição calculada e atualiza o elemento HTML (`texto-resultado`). Ele também utiliza o método `.splice()` para controlar os dados e altera a cor do botão de reiniciar dinamicamente via JavaScript.

## 🎨 Design e Layout

A parte visual foi construída com foco na imersão do usuário, utilizando fontes modernas importadas do Google Fonts (`Bebas Neue` e `Roboto`). O layout é totalmente centralizado com **CSS Flexbox** e possui um plano de fundo escuro contrastando com detalhes roxos vibrantes. Os botões contam com efeitos interativos de `hover`, `transition` e alteração de escala (`scale`) para melhorar o feedback visual.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação dos formulários, inputs numéricos e container principal.
- **CSS3:** Estilização com degradê moderno, posicionamento Flexbox e efeitos de transição.
- **JavaScript (ES6):** Manipulação de DOM, loops, objetos globais e controle de arrays (`push`/`splice`).

---

### 💻 Como Executar o Projeto

1. Faça o download ou clone este repositório.
2. Certifique-se de que os arquivos `index.html`, `style.css` e `script.js` estejam na mesma pasta.
3. Coloque uma imagem chamada `ninja.png` na mesma pasta para servir de ícone (opcional).
4. Abra o arquivo `index.html` em qualquer navegador moderno.

---
Desenvolvido por **Hamad Sales** como parte dos meus estudos de Desenvolvimento Web.
