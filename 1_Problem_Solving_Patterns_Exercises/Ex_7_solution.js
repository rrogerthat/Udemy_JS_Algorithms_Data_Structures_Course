function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
    
    let maxSum = arr[0];
    let pointer = 0;
    
    while (pointer <= arr.length - num) {
        let sum = 0;
        for (let i = pointer; i < pointer + num; i++) {
            sum += arr[i];
        }
        if (sum > maxSum) maxSum = sum;
        pointer++;
    }
    return maxSum;
  }