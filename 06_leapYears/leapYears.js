/*const leapYears = function(year) {
    
    if (year%100 === 0 && year%400 != 0) {
        return false;
    }
    else if (year%4===0) {
        return true;
    }
    else {
        return false;
    }

};*/


const leapYears = function(year) {
    
    return ((year%100 !== 0 || year%400 === 0) && year%4===0) 
        

};
// Do not edit below this line
module.exports = leapYears;
