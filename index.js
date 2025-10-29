const express = require('express');
const app = express();

// Render assigns PORT; you must use it and bind to 0.0.0.0
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node and Render!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on ${port}`);
});
