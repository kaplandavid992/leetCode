
 var mergeTwoLists = function(list1, list2) {
    result = list1.slice();
    console.log(result);
    result.splice(list2);
    console.log(result);
    
    
    return result;
};

mergeTwoLists([1,2,4],[1,2,3,5,7])