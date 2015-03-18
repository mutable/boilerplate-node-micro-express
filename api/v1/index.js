var express = require('express')
  , api = express.Router()
  , request = require('request')
  , lsq = require('lsq')
  , sq
  , config

lsq.config.get().then(function(c){
  config = c
})

api.get('/',function(req,res){
  res.send(config)
})

module.exports = api