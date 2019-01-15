//Time Complexity- O(n)

function validAnagram(one, two){
    if (one.length !== two.length) return false;

    let arr1 = one.split("");
    let arr2 = two.split("");
    console.log(arr1)

    let obj1 = {};
    let obj2 = {};

    for (let item of arr1) {
        obj1[item] = (obj1[item] || 0) + 1;
    }
    console.log(obj1);

    for (let item of arr2) {
        obj2[item] = (obj2[item] || 0) + 1;
    }
    console.log(obj2);

    for (let key in obj1) {
        if(!(key in obj2)) return false;
        if (obj1[key] !== obj2[key]) return false;
    }
    return true;
}