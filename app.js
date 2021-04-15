//required to use the fs module
const fs = require('fs');
//imports the code from a different module for use in this script, assigns it to the generatePage variable
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
//is the same as
//const name = profileDataArgs[0];
//const github = profileDataArgs[1];

const pageHTML = generatePage(name,github);



//first argument is the file name that will be created, or output file
//second argument is the data being written
//third argument is the callback function handling errors, as well as a success message
  fs.writeFile('./index.html', pageHTML,err => {
      if(err) throw err;
      console.log('Portfolio complete! Check out index.html to see the output!');
  });

  