function countUniqueValues(arr){
    
    if (arr.length === 0) return 0;
    else if (arr.length === 1) return 1;
    
    let count = 1;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
          count++;
        }
    }
    return count;
  }