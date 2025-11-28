console.log('Hell World')

const fs = require('fs');
fs.writeFile('output.txt', 'File written', (err)=> {
  if(err) console.log('Error Occured');
    else console.log('File is written succesfully');
})