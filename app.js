const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const fs = require('fs');

require('dotenv').config();
app.get('/isAlive', (req, res) => {
  res.status(200).send('true');
});

app.post('/saveString', (req, res) => {
  const data = req.body.data;
  fs.writeFile('data.txt', data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data');
    } else {
      res.status(200).send('Data saved');
    }
  });
});

app.get('/getString', (req, res) => {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send('No Data');
    } else {
      res.status(200).send(data);
    }
  });
});;

app.get('/busywait', (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 180000) {
    // console.log("wating")
  }
  res.status(200).send('Busy..');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port  ${port}`);
});

