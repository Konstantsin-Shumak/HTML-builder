let fs = require("fs");
let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you want to write?", function (text) {
    fs.open("./02-write-file/text.txt", "w", (err) => {
        if (err) throw err;
    });

    fs.writeFile("./02-write-file/text.txt", text, function (error) {
        if (error) throw error; // если возникла ошибка
        rl.close();
    });
});
