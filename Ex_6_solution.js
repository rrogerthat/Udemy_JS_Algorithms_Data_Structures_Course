function isSubsequence(string1, string2) {
    //find letter in second string
    //each letter found after should come after the previous letter
    //each letter after should be searched after position of previous letter
        
    let pointer = 0;
    let pointer2 = 0;
    let match = 0;

    while (pointer < string1.length && pointer2 < string2.length) {
    if (string1.charAt(pointer) === string2.charAt(pointer2)) {
        pointer++;
        pointer2++;
        match++;
    } 
    else if (string1.charAt(pointer) !== string2.charAt(pointer2)) {
        pointer2++; 
    } 
    }
    if (match === string1.length) return true;
    else return false;
}