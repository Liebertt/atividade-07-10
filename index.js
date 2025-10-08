const express = require('express');
const app = express();
// O Azure App Service define a porta através de uma variável de ambiente, 
// geralmente chamada PORT. Caso contrário, usa 3000.
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send('<h1>Projeto CN1 P1 - Hello Azure!</h1><p>Esta aplicação está rodando com sucesso.</p>');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});