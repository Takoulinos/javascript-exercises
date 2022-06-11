const reverseString = function(text) {
    if (text==='') return '';
    let output='';
    for (i=text.length-1; i>=0; i--) {
        output += text[i];
    }
    return output;

};

// Do not edit below this line
module.exports = reverseString;
