const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then(data => {
        const lines = data.split('\n');
        const result = {};
        
        lines.forEach(line => {
          const [firstname, field] = line.split(':');
          
          if (!result[field]) {
            result[field] = [];
          }
          
          result[field].push(firstname);
        });
        
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}

module.exports = {
  readDatabase
};

