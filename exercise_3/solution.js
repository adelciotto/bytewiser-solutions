/* --------------------------------------------------------------------
 * Bytewiser
 * Exercise 3: Modifying Buffers
 * Author: Anthony Del Ciotto
 * Date: 08/07/2015
 * -------------------------------------------------------------------- */

var DOT = '.'.charCodeAt(0);
var EXCLAMATION = '!'.charCodeAt(0);

process.stdin.on('data', function(buff) {
    for (var i = 0; i < buff.length; i++) {
        if (buff[i] === DOT){
            buff[i] = EXCLAMATION;
        }
    }

    console.log(buff);
});
