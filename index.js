var isSIRET = function(siret){
    return verify(siret,14);
}

var isSIREN = function(siren){
    return verify(siren,9)
}

function verify(number, size){
    if (isNaN(number) || number.length!=size) return false;
    var bal = 0;
    var total = 0;
    for (var i=size-1; i>=0; i--){
        var step = (number.charCodeAt(i)-48)*(bal+1);
        /*if (step>9) { step -= 9; }
         total += step;*/
        total += (step>9)?step-9:step;
        bal = 1-bal;
    }
    return (total%10==0)?true:false;
}

module.exports = isSIRET;
module.exports.isSIRET = isSIRET;
module.exports.isSIREN = isSIREN;