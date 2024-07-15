const path = require('path')
// console.log(path.basename('C:/Users/student/Desktop/pujan/NodeProject'))
// console.log(process.env.PATH);
// process.env.PATH.split(path.delimiter);
// console.log(path.extname('C:/Users/student/Desktop/pujan/NodeProject/Lab17-2.js'))	
console.log(path.normalize('/foo/bar/..'));
console.log(path.join('/foo','bar','bar2'));
console.log(path.join('/foo/bar','/foo/abc'));
