//loop thru array once and check if any element greater than or equal to integer- return 1
//loop thru array starting from each pointer, iterate to length of 2. If any summed to be greater than 
//or equal to integer, return 2
//From each pointer, iterate to length of 3. If any summed to be greater or equal to integer, return 3.
//...
function minSubArrayLen(arr, num) {
    let pointer = 0;
    let currLength = 1;
    
    for (let i = pointer; i < arr.length; i++) {
        if (arr[i] >= num) return currLength;
    }
    currLength++;
    let startingLength = 2;
    
    while (currLength <= arr.length) {  //pointer = 1, currLength = 3;
        let sum = 0;
        for (let i = pointer; i < currLength; i++) {
            sum += arr[i];
        }
        if (sum >= num) {
            console.log(sum);
            return currLength - pointer;
        }
        if (pointer === 0 && currLength === arr.length - 1) return 0;
        pointer++;
        currLength++;
        if (currLength > arr.length) {
            pointer = 0;
            currLength = startingLength++;
        }
    }
}