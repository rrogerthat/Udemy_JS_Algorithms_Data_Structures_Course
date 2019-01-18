// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//had to look up answer
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//my solution returns undefined although console.log returns correct outputs
function fib(n){
    let arr = [1,1];
    let pointer1 = 0;
    let pointer2 = 1;
    
    function helper(n) {
      arr.push(arr[pointer1] + arr[pointer2]);
      console.log(arr);
      if (arr.indexOf(arr[arr.length - 1]) === n-1) {
          console.log(arr[n-1]);    //outputs correct
          return arr[n-1];          //returns undefined
      }
      else {
          pointer1++;
          pointer2++;
          helper(n);
      }
    }
    helper(n);
  }