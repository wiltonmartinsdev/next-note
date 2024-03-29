# Next Note

A aplicação permite aos usuários adicionar notas de forma fácil e intuitiva, seja digitando diretamente ou gravando uma nota em áudio que será convertida automaticamente para texto. Isso é facilitado pelo uso de APIs de reconhecimento de voz disponíveis nos navegadores modernos. Além disso, a aplicação utiliza várias bibliotecas e frameworks para melhorar a experiência de desenvolvimento e a qualidade final da aplicação. Também permite que o usuário crie, visualize e exclua notas, podendo pesquisar para encontrar rapidamente as notas que você precisa.

`Observação:` Essa aplicação foi desenvolvida durante o NLW Expert da RocketSeat. Mas, fiz algumas alterações personalizadas no projeto.

## Stacks Utilizadas

-   **React.js**: Uma biblioteca JavaScript popular para construção de interfaces de usuário.
-   **TypeScript**: Um superconjunto tipado de JavaScript que compila para JavaScript simples.
-   **Vite**: Uma ferramenta de construção rápida para aplicações web modernas.
-   **Tailwind CSS**: Um framework CSS de utilidade primeiro para estilização rápida de componentes.
-   **Date-fns**: Uma biblioteca para manipulação e formatação de datas em JavaScript.
-   **Lucide React**: Uma biblioteca de ícones de código aberto para React.

## Pré-requisitos

-   Node.js instalado na máquina - versão 20.11.0-LTS ou superior .
-   NPM (Node Package Manager) para instalar as dependências necessárias do projeto.
## Instalação

- Clone o repositório, com o comando abaixo, no seu terminal:
   - Utizando HTTPS `git clone git@github.com:wiltonmartinsdev/next-note.git` ou
   - Utilizando SSH: `git clone git@github.com:wiltonmartinsdev/next-note.git`.
- Acesse o diretório do projeto: `cd next-note`.
- Certifique-se de ter o Node.js e o NPM instalados em sua máquina e depois digite no terminal o comando abaixo para instalar todas as dependências necessárias do projeto.

      npm install
## Execução da Aplicação

-   Após instalar todas as dependências necessárias do projeto, agora poderá executá-lo da seguinte maneira:
-   Digite no terminal o comando abaixo:

          npm run dev

          Após esse comando, o servidor será iniciado e aparecerá a mensagem: "Local: http://localhost:" informando que o servidor esta sendo executado e mostrará a porta de execução. A partir, desta etapa podemos testar a aplicação.
## Funcionalidades

-   Criação de notas: O aplicativo utiliza a API SpeechRecognition para permitir a criação de notas por meio de gravação de voz. Essa API oferece a capacidade de converter fala em texto em tempo real, o que facilita a criação de notas sem a necessidade de digitar.
-   Visualização de notas em um formato de cartão.
-   Pesquisa de notas por conteúdo.
-   Exclusão de notas.

`Observações:`

-   A API SpeechRecognitionAPI pode não estar disponível em todos os navegadores, neste momento (14/02/2024) funciona somente nos navegadores Chrome, Edge, Safari nas suas últimas versões web.
-   A qualidade da transcrição pode variar dependendo do ambiente e da qualidade do áudio.


## Demonstração da Aplicação

<img src="https://github.com/wiltonmartinsdev/next-note/blob/main/src/assets/project%20view.gif?raw=true" />


## Status do Projeto

-   Conforme com o que foi proposto nos 3 dias do NLW Expert, a aplicação encontra-se finalizada, mas, podendo ser implementada novas funcionalidades no futuro.

## Licença do Projeto

![GitHub License](https://img.shields.io/github/license/wiltonmartinsdev/next-note)


## Aprendizados

Desenvolver este aplicativo foi uma experiência gratificante que me proporcionou a oportunidade de aplicar meus conhecimentos e aprender novas habilidades. Acredito que os aprendizados obtidos serão valiosos para meus projetos futuros. Ao desenvolver o aplicativo de notas, tive a oportunidade de aprender e aprimorar diversas habilidades em diferentes áreas. Abaixo, listo alguns dos principais aprendizados que obtive:

**Desenvolvimento Front-end:**

-   **React**: Aprofundei meu conhecimento em ReactJS, aprimorando minha capacidade de criar interfaces de usuário interativas e responsivas.

-   **Tailwind CSS**: Aprendi a utilizar o Tailwind CSS para estilizar o aplicativo de forma eficiente e modular, garantindo a responsividade da interface em diferentes dispositivos.

-   **Acessibilidade**: Considerei a acessibilidade durante o desenvolvimento, utilizando outlines e elementos HTML semânticos.

**Gestão de Estado:**

-   **useState**: Aprimorei meu uso do hook useState para gerenciar o estado dos componentes de forma eficaz.

**Armazenamento de dados:**

-   **Local Storage**: Utilizei o Local Storage do navegador para persistir as notas criadas pelo usuário, mesmo após a recarga da página ou o fechamento do aplicativo.

**Bibliotecas e APIs:**

-   **Radix UI**: Aprendi a utilizar a biblioteca Radix UI para implementar diálogos de forma elegante e acessível.

-   **date-fns**: Aprendi a utilizar a biblioteca date-fns para formatar datas de forma localizada.
