function sameFrequency(arg1, arg2){
    
    if (arg1.toString().length !== arg2.toString().length) return false;
    
    let countObj = {};
    
    for (let num of arg1.toString()) {
        if (countObj[num]) countObj[num]++;
        else countObj[num] = 1;
    }
    
    for (let item of arg2.toString()) {
        if (!countObj[item]) return false;
        else countObj[item]--;
    }
    
    for (let item in countObj) {
        if (countObj[item] > 0 || countObj[item] < 0) return false;
    }
    return true;
}
