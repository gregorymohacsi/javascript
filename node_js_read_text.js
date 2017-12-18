var fs = require('fs');

var content = fs.readFileSync('./data/BR06\ Control_measures.rpt', 'utf-8');

/*
  A whole bunch of nasty looking string manipulations to put the 
  data into a format that's better for starnet
*/

var newContent = content.replace(/Station:/g, '{ \'Station\':');

newContent = newContent.replace(/Prism Constant:(\d+).(\d+)/g, '');
newContent = newContent.replace(/Target height:(\d+).(\d+)/g, '');
newContent = newContent.replace(/(Name:\s*\w*\s*)/g,'$1}');
newContent = newContent.replace(/(Name:\w*\s*)(\w*\s*)(\w+)/g,'$1 $2 $3}');


// newContent = newContent.trim();

// let re = new RegExp(/Name:\d*\s*\w*/g);
// let matches = 

/*
  Write the content out to a new file
*/

fs.writeFile('./data/BR06ControlMeasuresJSONstring.txt', newContent, function (error) {
    if (error) {
        console.error("write error:  " + error.message);
    } else {
        console.log("Successful Write.");
    }
});