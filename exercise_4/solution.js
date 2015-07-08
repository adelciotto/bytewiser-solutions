/* --------------------------------------------------------------------
 * Bytewiser
 * Exercise 4: Line Splitter
 * Author: Anthony Del Ciotto
 * Date: 08/07/2015
 * -------------------------------------------------------------------- */
var fs = require('fs');

var NL = '\n'.charCodeAt(0);
var FILE_NAME = process.argv[2];

fs.readFile(FILE_NAME, function(err, buff) {
    if (err) {
        throw err;
    }

    var offset = 0;
    for (var i = 0; i < buff.length; i++) {
        // split file contents by '\n' chars
        if (buff[i] === NL) {
            console.log(buff.slice(offset, i));
            offset = ++i;
        }
    }

    // make sure to print the line after the final '\n'
    console.log(buff.slice(offset, i));
});
