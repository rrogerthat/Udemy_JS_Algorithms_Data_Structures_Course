// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(input){
    let pointer1 = 0;
    let pointer2 = input.length - 1;
	let outcome;
    
    function checkEnds() {
        if (pointer1 === pointer2 || pointer2 < pointer1) {
            outcome = true;
            return;
        } 
        else if (input[pointer1] !== input[pointer2]) {
            outcome = false;
            return;
        }
        pointer1++;
        pointer2--;
        checkEnds();
    }
    checkEnds();
    return outcome;
}