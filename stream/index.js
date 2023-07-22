const fs = require('fs')

const readableStream = fs.createReadStream('./stream/input.txt' , {
highWaterMark : 15
})
const writableStream = fs.createWriteStream('output.txt');  

readableStream.on('readable', () => {
        writableStream.write(`${readableStream.read()}\n`);
        writableStream.end
})