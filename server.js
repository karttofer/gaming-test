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

// ➢ GET /timezones that read timezones from this public api
// ○ Parse the result to a name and a local time.
// ➢ GET /timezones/:name that gets a specific timezone
// ➢ PUT /timezones/:name that selects a timezone (a log entry is OK)
// ➢ DELETE /timezones/:name that selects a timezone (a log entry is OK)

app.listen(8080);
