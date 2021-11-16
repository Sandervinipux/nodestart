const path = require('path')

console.log(__filename)
//The path.basename() method returns the last portion of a path, similar to the Unix basename command. 
console.log(path.basename(__filename))
//The path.dirname() method returns the directory name of a path, similar to the Unix dirname command
console.log(path.dirname(__filname))
//The path.extname() method returns the extension of the path, from the last occurrence of the 
console.log(path.extname(__filename))
//The path.parse() method returns an object whose properties represent significant elements of the path. 
console.log(path.parse(__filename))
//The path.join() method joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path
console.log(path.join(__dirname, 'test', 'second.html'))
//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
console.log(path.resolve(__dirname, './test', '/second.html'))
