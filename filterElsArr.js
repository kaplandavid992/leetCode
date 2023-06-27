/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    
    const res = [];
    arr.forEach((el,i) => { fn(el,i) ? res.push(el):null } );
    return res;
};