/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    const res = [];
    head.forEach(element => {
       res.unshift(element); 
    });
    console.log(res);
    return res;
};

reverseList([1,2,3]);