const express = require('express');
const app = express();
const path = require('path');

const PORT = 4000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on Port ${PORT}`);
});
