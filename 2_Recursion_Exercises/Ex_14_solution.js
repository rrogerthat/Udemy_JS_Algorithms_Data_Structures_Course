// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//popular solution from online answer:
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//my solution (1/21/2019 updated)
function fib(n){
    let arr = [1,1];
    let pointer1 = 0;
    let pointer2 = 1;
    let result;
    
    function helper(n) {
      arr.push(arr[pointer1] + arr[pointer2]);
      if (arr.indexOf(arr[arr.length - 1]) === n-1) {
          result = arr[n-1];  //since cannot return here as we have no control over it in recursion
          return;
      }
      else {
          pointer1++;
          pointer2++;
          helper(n);
      }
    }
    helper(n);

    return result;
  }