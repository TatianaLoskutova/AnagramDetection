var isAnagram = function(test, original) {
    if (test.length !== original.length) {
        return false
    }

    let sort1 = test.toLowerCase().split('').sort().join('')
    let sort2 = original.toLowerCase().split('').sort().join('')

    return sort1 === sort2
};
