const generatePage = (name, github) => {
    return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
  
    //template literals/strings are written as &{variable} format inside of ` (backticks) 
    //allows to insert JS expressions in a string ie printing a JS value as part of a string
    //like using .log("string"+value+"string")
    //const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
};

//makes the following function avaliable to other files
module.exports = generatePage;