/*const fs = require('fs');
fs.open('file-open.txt', 'w', (err, file) => {
  if (err) {
    throw err;  
  }
  console.log('The file has been Saved!');
});
*/

const fs = require('fs');
fs.appendFile('file-open.txt', 'P.S. Sheldon Cooper Said This.', (err) => {
  if (err) {
    throw err;
  }
  console.log('The file has been Updated!');
});