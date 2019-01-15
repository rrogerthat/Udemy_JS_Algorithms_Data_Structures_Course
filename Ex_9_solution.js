//start search from first element of string
//each element after must not have been a previous element
//if duplicate, break out of loop. Move pointer up 1.
//end while loop when pointer is >= string's length
function findLongestSubstring(input){
    let pointer = 0;
    let point2 = 0;
    let count = 0;
    let arr = [];
    
    if (!input.length) return 0;
    
    while(pointer < input.length) {
        
        let letter = input.charAt(pointer);
              
        if ( !arr.includes(letter) ) {
            arr.push(letter);
            if (pointer === input.length - 1 && arr.length > count) count = arr.length; 
        }
        else if (arr.length === "" || arr.length <= count) {
            arr = [];
            pointer = point2++;
        }
        else if (arr.length > count)  {
           count = arr.length;
           arr = [];
           pointer = point2++;
        }
        pointer++;
    }
    return count;
  }  