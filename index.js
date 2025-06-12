const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola mundo gatuno!</h1>');
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
