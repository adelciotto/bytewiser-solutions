/* --------------------------------------------------------------------
 * Bytewiser
 * Exercise 5: Buffer Concat
 * Author: Anthony Del Ciotto
 * Date: 08/07/2015
 * -------------------------------------------------------------------- */

var buffers = [];

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();

    if (chunk !== null) {
        buffers.push(chunk);
    }
});

process.stdin.on('end', function() {
    console.log(Buffer.concat(buffers));
});
