const express = require('express');
const api = express.Router();
Meta = require('@mutable/meta');

let config;

Meta.config()
.then((_config) => {
  config = _config;
})

api.get('/', (req,res) => {
  res.send(config);
})

module.exports = api;