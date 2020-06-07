const fs = require('fs');
// fs.writeFileSync('note.txt', 'My name is Thanh')
fs.appendFileSync('note.txt', ' .This is my first program in nodeJS', 'utf8');