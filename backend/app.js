// backend/app.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];
let id = 1;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'test' && password === 'test123') {
    return res.status(200).json({ token: 'fake-jwt-token' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/items', (req, res) => res.json(todos));

app.post('/items', (req, res) => {
  const item = { id: id++, ...req.body };
  todos.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(i => i.id == id);
  if (index === -1) return res.status(404).send();
  todos[index] = { ...todos[index], ...req.body };
  res.json(todos[index]);
});

app.delete('/items/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(i => i.id != id);
  res.status(204).send();
});

module.exports = app;
