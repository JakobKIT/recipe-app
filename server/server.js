const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
        res.send(`
      <h1>Express + Docker</h1>
      <span>That's awesome!</span>
    `);
  });

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
  });
