const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.send('Bonjour et Bienvenue, Le contenu de la page dépend du chemin employé, allez donc y jeter un oeil !! /Thomas /sergei  /test \n');
});

app.get('/Thomas', function(req, res) {
  res.send('Bonjour Thomas');
});

app.get('/sergei', function(req, res) {
  res.send('bonjours sergei');
});

app.get('/test', function(req, res) {
  res.status(404).send('Couldn\'t find ressource');
});

app.listen(port, () => {
  console.log('Exemple app listening at http://localhost:${port}');
});
