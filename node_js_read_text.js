var fs = require('fs');
var path = require('path');


var content = fs.readFileSync('./data/BR06\ Control_measures.rpt', 'utf-8');

var newContent = content.split(' ')

console.log(newContent)

// console.log(content.split(' '));

// var content_parsed = JSON.parse(content)

// console.log(content_parsed)