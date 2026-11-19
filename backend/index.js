const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const timesheets = [];

app.post('/api/timesheet', (req, res) => {
  const { employeeName, hours } = req.body;
  timesheets.push({ employeeName, hours });
  res.status(201).send('Timesheet saved');
});

app.get('/api/timesheet', (req, res) => {
  res.json(timesheets);
});

const server = app.listen(5000, '0.0.0.0', () => {
  console.log('Backend running on port 5000');
});

// Keep process alive if Node 26 closes unref'd sockets
setInterval(() => {}, 1 << 30);
