// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (!arr.length) return 0;  //edge cases
   
    if (arr.length === 1) return arr[0];  //stop recursion

    return arr[0] * productOfArray(arr.slice(1));
}