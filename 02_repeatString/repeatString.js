const repeatString = function(text, times) {
    if (times<0) return 'ERROR';
    let message = '';
    for (i=0; i<times; i++) {
        message += text;
    }
    return message;

};

// Do not edit below this line
module.exports = repeatString;
