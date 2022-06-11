const sumAll = function(x,y) {
    if (!(typeof x === 'number' && x>=0 && typeof y === 'number' && y>=0)) {
        return 'ERROR';
    }
    let sum = 0;
    if (x>y) {
        for (i=y; i<=x; i++) {
            sum += i;
        }
    }
    else {
        for (i=x; i<=y; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
