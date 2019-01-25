function reverse(input){
    let inReverse = "";
    let pointer = input.length;
    
    function toReverse() {
      pointer--;
      while (pointer >= 0) {
          inReverse += input[pointer];
          toReverse();
      }
    }
    toReverse();
    return inReverse;
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'