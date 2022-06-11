const removeFromArray = function(array) {
    let i = 1;
    while (i<arguments.length) {
        for (j=0; j<array.length; j++) {
            if (arguments[i]===array[j]) {
                array.splice(j,1);
            }
        }
        i++;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
