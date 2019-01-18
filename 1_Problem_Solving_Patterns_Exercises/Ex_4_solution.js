function areThereDuplicates() {
    let countObj = {};
    
    for (let  i = 0; i < arguments.length; i++) {
        if (countObj[arguments[i]]) return true;
        else countObj[arguments[i]] = 1;
    }
    return false;
  }