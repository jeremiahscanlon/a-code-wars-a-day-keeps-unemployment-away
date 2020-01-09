// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.
// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// array_diff([1,2,2,2,3],[2]) == [1,3]

// first submission ...
function array_diff(a, b) {
    let resultArray = [];
    a.forEach(num => {
        if(b.indexOf(num) === -1) {
            resultArray.push(num);
        }
    })
    return resultArray;
}

// after seeing results ... 
// filter is what you were trying to remember, dingus:
function array_diff_refactored(a, b) {
    return a.filter(x => b.indexOf(x) === -1);
}