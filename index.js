const isSIRET = function(siret) {
    return verify(siret,14);
}

const isSIREN = function(siren) {
    return verify(siren,9)
}

/**
 * Verify that number has the expected size and that it has a valid luhn signature
 * Special case for La Poste SIRET
 * @param {string} number
 * @param {number} size
 * @returns {boolean}
 */
function verify(number, size) {
    if (typeof number !== 'string') {
        number = String(number)
    }

    if (isNaN(number) || number.length !== size) {
        return false;
    }

    let bal = 0;
    let total = 0;

    // Special case: La Poste has 12,564 Siret numbers, so we check against the sum of all numbers % 5 instead of luhn
    // 35600000000048 is the main SIRET number and is a normal number.
    if (size === 14 && number.slice(0, 9) === '356000000' && number !== '35600000000048') {
        for (let i = 0; i < size; i++) {
            total += parseInt(number.charAt(i), 10);
        }

        return total % 5 === 0;
    }

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
