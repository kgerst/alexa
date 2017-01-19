'use strict';
var _ = require('lodash');

function FactHelper() {}

FactHelper.prototype.facts = [
  "According to an October 2014 release, only 16.6 percent of Microsoft's technical positions are filled by women", 
  "According to a 2016 report by the Bureau of Labor, the percentage of computing occupations held by women has been declining since 1991", 
  "According to a 2012 study, male-only teams account for 82 to 90 percent of all information technology patents, meaning women are therefore more underrepresented in technology patenting than they are in the technology workforce overall", 
  "A 2014 study by the Center for Talent Innovation found that roughly 1 in 3 women working in science, engineering and technology report that they feel stalled in their careers and are likely to quit their jobs in one year", 
  "A 2008 study of the technical workforce in Silicon Valley found that the odds of being in a high-level or leadership position were 2.7 times greater for men than for women", 
  "An investigation of 500 U.S. businesses completed in 2009 found that companies with more race and gender diverse teams had higher sales revenue, more customers, greater market share, and greater profits than did less diverse companies.",
  "A 2009 study of 272 projects at four companies found that gender diversity on technical work teams was associated with superior adherence to project schedules, lower project costs, higher employee performance ratings, and higher employee pay bonuses"
];

FactHelper.prototype.requestFact = function() {
  return this.getFact();
};

FactHelper.prototype.getFact = function() {
  var factArr = this.facts;
  var factIndex = Math.floor(Math.random() * factArr.length);
  var randomFact = factArr[factIndex];
  return randomFact;
};

module.exports = FactHelper;
