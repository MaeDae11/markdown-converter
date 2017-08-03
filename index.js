const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// keep runing node index.js in terminal to make sure all good
rl.question('What is the filename? ', (filename) => {
    console.log('yep you said: ' + filename)
    // close interface
    rl.close();
    fs.readFile(filename, (err, buffer) => {
        // error first always
        if (err){
            console.log(err.message);
            return;
        }
        console.log ("i found it!");
        let content = buffer.toString();
        let upcased = content.toUpperCase();
        console.log(upcased);
    })
})