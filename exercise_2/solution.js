/* --------------------------------------------------------------------
 * Bytewiser
 * Exercise 2: Hexidecimal Encoding
 * Author: Anthony Del Ciotto
 * Date: 08/07/2015
 * -------------------------------------------------------------------- */

var buffer = new Buffer(process.argv.slice(2));
console.log(buffer.toString('hex'));
