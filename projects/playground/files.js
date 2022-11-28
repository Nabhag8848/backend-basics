// https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js
// https://nodejs.org/dist/latest-v18.x/docs/api/fs.html

const fs = require('fs').promises;
const fsSync = require('node:fs');

async function readFile(filepath){

    try{
        const data = await fs.readFile(filepath); // data: Buffer
        console.log(data.toString());
    }catch(err) {
        console.log(err);
    }
}

async function writeFile(filepath){
    try{
        const content = 'Hello from Node.js\n';
        await fs.writeFile(filepath, content, {flag: 'a'});
    }catch(err){
        console.error(err);
    }
}

function isFileExist(filepath) {
    try{    
        const data = fsSync.existsSync(filepath);
        console.log(data.toString());
    }catch(err){
        console.error(err);
    }
}

async function checkPermission(filepath) {
    try{    

        /* fs.constants.R_OK, 
        fs.constants.W_OK, 
        fs.constants.X_OK
        */

        await fs.access(filepath, fs.constants.F_OK) // or accessSync 
        console.log('can access');
    }catch(err){
        console.error(err);
    }
}

async function deleteFile(filepath){
    try{
        await fs.unlink(filepath);
        console.log('permanent remove');
    }catch(err){
        console.error(err);
    }
}

async function readLineByLine(filepath){
    try{
        const file = await fs.open(filepath);

        for await (const line of file.readLines()){
            console.log("readingline: ", line);
        }

    }catch(err){
        console.error(err);
    }
}

function copyFile(filepath){
    try{
        const readable= fsSync.createReadStream(filepath + '/text.txt', {encoding: 'utf8'});
        const writable = fsSync.createWriteStream(filepath + '/text1.txt');
        readable.pipe(writable);
    }catch(err){
        console.error(err);
    }
}

writeFile(__dirname + '/temp/text.txt');
readLineByLine(__dirname + '/temp/text.txt');
readFile(__dirname + '/temp/text.txt');
isFileExist(__dirname + '/temp/text.txt');
checkPermission(__dirname + '/temp/text.txt');
// deleteFile(__dirname + '/temp/text.txt');
copyFile(__dirname + '/temp');





