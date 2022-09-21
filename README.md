# Testes automatizados com Cypress - Básico

Pré requisitos para a execução do projeto:

- NodeJS;
- NPM;
- editor/IDE de preferência;
- git; 

Para clonar o projeto, crie uma pasta local e abra o terminal no local, executando o seguinte comando: 
`git clone https://github.com/dosantosbjj/cypress-basico-v2` 

Assim que clonar o projeto, execute:
`npm install`

Assim será feita a instalação das dependências do projeto. 

Em seguida, quando concluir as dependências e tiver gerado a pasta node modules, é hora de rodar o cypress pela primeira vez com o comando:
`npx cypress open`

Quando abrir a interface do cypress, faça a configuração inicial, selecionando um navegador e rodando a suíte de testes. 

Para avançar na execução dos testes, é possível rodar o cypress de modo headless com o comando:
`npm run test`

Note que não é aberto o navegador e os resultados são exibidos diretamente no terminal.

**Obs.: Na pasta cypress/videos fica armazenado um vídeo em MP4 do cypress runner em ação, salvando também screenshots quando o teste falha. 

O código fonte dos testes está no diretório 'integration', caso queira consultar. 