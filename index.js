const isSIRET = function(siret){
    return verify(siret,14);
}

const isSIREN = function(siren){
    return verify(siren,9)
}

function verify(number, size){
    if (isNaN(number) || number.length !== size) {
        return false;
    }

    let bal = 0;
    let total = 0;

    // Luhn algorithm
    for (let i = size-1; i >= 0; i--) {
        const step = (number.charCodeAt(i) - 48) * (bal + 1);

        total += (step > 9) ? step - 9 : step;
        bal = 1 - bal;
    }

    return total % 10 === 0;
}

module.exports = isSIRET;
module.exports.isSIRET = isSIRET;
module.exports.isSIREN = isSIREN;
