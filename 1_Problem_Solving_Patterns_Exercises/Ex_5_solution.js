function averagePair(arr, avg){
    let pointer = 0;
    
    if (arr.length === 0) return false;
    
    while (pointer < arr.length - 1) {
        for (let i = pointer + 1; i < arr.length; i++)
        if ( (arr[pointer] + arr[i])/2 === avg) return true;
        pointer++;
    }
    return false;
  }