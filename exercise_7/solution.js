/* --------------------------------------------------------------------
 * Bytewiser
 * Exercise 7: Array Buffers
 * Author: Anthony Del Ciotto
 * Date: 08/07/2015
 * -------------------------------------------------------------------- */

// write cmd arg to first element of U32 int array
var ui32Arr = new Uint32Array(1);
ui32Arr[0] = process.argv[2];

// create U16 int array from the array buffer of the U32 int array
var ui16Arr = new Uint16Array(ui32Arr.buffer);

// will log two numbers rather than one as the array buffer used to
// create the U16 int array was of type U32 bit. It needs to split
// the 32 bit integer from the original array into two elements
// so it will fit.
console.log(JSON.stringify(ui16Arr));
