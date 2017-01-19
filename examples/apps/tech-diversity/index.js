'use strict';
module.change_code = 1;
var _ = require('lodash');
var Alexa = require('alexa-app');
var app = new Alexa.app('diversityfacts');
var FactHelper = require('./fact_helper');

app.launch(function(req, res) {
  var prompt = 'To learn more about diversity in the tech industry, ask me for a fact.';
  res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

app.intent('diversityfacts', {
  'utterances': ['{|tell|give} {|me} {|a|some} {information|something|trivia|fact}']
},
  function(request, response) {
      var factHelper = new FactHelper();
      response.say(factHelper.requestFact());
  }
);

//hack to support custom utterances in utterance expansion string
console.log(app.utterances().replace(/\{\-\|/g, '{'));
module.exports = app;
