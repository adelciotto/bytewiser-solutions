/* --------------------------------------------------------------------
 * Bytewiser
 * Exercise 6: Typed Arrays
 * Author: Anthony Del Ciotto
 * Date: 08/07/2015
 * -------------------------------------------------------------------- */

process.stdin.once('data', function(buff) {
    var arr = new Uint8Array(buff);

    console.log(JSON.stringify(arr));
});
