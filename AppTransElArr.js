/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    const res = [];
    arr.forEach((el,i) => { res.push( fn(el,i)) } );
    return res;
};