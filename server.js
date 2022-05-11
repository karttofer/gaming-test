const express = require('express');
const app = express();

// Get all values
app.get('/timezones', (req, res) => {
  fetch('http://worldtimeapi.org/api/timezone')
    .then((r) => r.json())
    .then((response) => {
      res.send({ timezones: response });
    });
});

app.get('/specific/search', (req, res) => {
  fetch(`http://worldtimeapi.org/api/timezone/${req.query.name}`)
    .then((r) => r.json())
    .then((response) => {
      res.send({ timezones: response });
    });
});

app.get('/specific/timezone', (req, res) => {
  fetch(
    `https://timezoneapi.io/api/timezone/?${req.query.name}&token=aTOKHBqnzzVTbfudZmtZ`
  )
    .then((r) => r.json())
    .then((response) => {
      res.send({ timezones: response });
    });
});
app.listen(8080);
