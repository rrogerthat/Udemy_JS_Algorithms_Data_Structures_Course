function flatten(arr){
    let newArr = [];
    
    arr.forEach(item => {
         if( Array.isArray(item)) {
             newArr = newArr.concat(flatten(item));
         }
         else newArr.push(item);
    });
    return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]