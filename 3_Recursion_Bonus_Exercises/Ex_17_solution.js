// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback){
    if (arr[0] && callback(arr[0]) ) {
        return true;
    } 
    else if (!arr.length) {
      return false;   
    } 
    
    if (arr.length) {
      arr.splice(0,1);  
     return someRecursive(arr, callback);    
    }
  }